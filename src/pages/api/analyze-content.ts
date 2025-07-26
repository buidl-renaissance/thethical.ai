import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { db } from '../../db';
import { templates } from '../../db/schema';

// Configure the body parser to accept larger payloads
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { imageAnalysis, transcript } = req.body;

    if (!imageAnalysis && !transcript) {
      return res.status(400).json({ 
        success: false, 
        error: 'No image analysis or transcript data provided' 
      });
    }

    // Fetch templates from database
    const dbTemplates = await db.select({
      templateId: templates.templateId,
      name: templates.name,
      description: templates.description,
      tag: templates.tag
    }).from(templates);

    if (dbTemplates.length === 0) {
      return res.status(500).json({
        success: false,
        error: 'No templates found in database'
      });
    }

    // Prepare content for analysis
    let contentToAnalyze = '';
    
    if (transcript) {
      contentToAnalyze += `Voice input: "${transcript}"\n\n`;
    }
    
    if (imageAnalysis) {
      contentToAnalyze += `Image Analysis:
- Description: ${imageAnalysis.description}
- Objects: ${imageAnalysis.objects.join(', ')}
- Text: ${imageAnalysis.text.join(', ')}
- Colors: ${imageAnalysis.colors.join(', ')}
- Mood: ${imageAnalysis.mood}
- Context: ${imageAnalysis.context}
- Suggestions: ${imageAnalysis.suggestions.join(', ')}

`;
    }

    // Create template list for analysis
    const templateList = dbTemplates.map(t => 
      `- ${t.templateId}: ${t.name} - ${t.description} (Tag: ${t.tag})`
    ).join('\n');

    // Analyze content using OpenAI
    const analysisPrompt = `
You are an AI assistant that analyzes user content (image analysis and voice transcripts) to suggest relevant workflow templates.

Content to analyze:
${contentToAnalyze}

Available workflows:
${templateList}

Please analyze the content and:
1. Provide a brief analysis of what the user is trying to accomplish
2. Suggest the most relevant workflows with confidence scores (0-1)
3. Explain why each template is relevant

Respond in JSON format:
{
  "analysis": "Brief analysis of the content and user intent",
  "templates": [
    {
      "templateId": "template-id",
      "confidence": 0.85,
      "reasoning": "Why this template is relevant"
    }
  ]
}
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that analyzes user content and suggests relevant workflow templates. Always respond with valid JSON.'
        },
        {
          role: 'user',
          content: analysisPrompt
        }
      ],
      temperature: 0.3,
    });

    const analysisResult = completion.choices[0]?.message?.content;
    
    if (!analysisResult) {
      throw new Error('No analysis result received');
    }

    // Parse the JSON response
    let parsedResult;
    try {
      parsedResult = JSON.parse(analysisResult);
    } catch (error) {
      console.error('Failed to parse analysis result:', error);
      // Fallback to basic analysis
      parsedResult = {
        analysis: 'Analyzing your content to find relevant workflows...',
        templates: []
      };
    }

    // Map the analysis results to our database template structure
    const suggestedTemplates = dbTemplates.map(template => {
      const suggestedTemplate = parsedResult.templates?.find(
        (t: { templateId: string; confidence: number }) => t.templateId === template.templateId
      );
      
      return {
        templateId: template.templateId,
        name: template.name,
        description: template.description,
        confidence: suggestedTemplate?.confidence || 0,
      };
    }).filter(template => template.confidence > 0.1)
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 3); // Return top 3 suggestions

    return res.status(200).json({
      success: true,
      analysis: parsedResult.analysis || 'Content analyzed successfully.',
      templates: suggestedTemplates
    });

  } catch (error) {
    console.error('Error analyzing content:', error);
    return res.status(500).json({
      success: false,
      error: 'Error analyzing content',
    });
  }
} 