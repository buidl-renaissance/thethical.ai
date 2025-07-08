import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

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

interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  steps: string[];
  confidence: number;
}

// Predefined workflow templates
const workflowTemplates: WorkflowTemplate[] = [
  {
    id: 'project-planning',
    name: 'Project Planning',
    description: 'Organize and structure a new project with clear milestones and deliverables.',
    category: 'Project Management',
    icon: '📋',
    steps: [
      'Define project scope and objectives',
      'Create project timeline',
      'Identify key stakeholders',
      'Set up project tracking tools',
      'Plan resource allocation'
    ],
    confidence: 0
  },
  {
    id: 'marketing-campaign',
    name: 'Marketing Campaign',
    description: 'Launch a comprehensive marketing campaign across multiple channels.',
    category: 'Marketing',
    icon: '📢',
    steps: [
      'Define target audience',
      'Create campaign messaging',
      'Choose marketing channels',
      'Set up tracking and analytics',
      'Plan content calendar'
    ],
    confidence: 0
  },
  {
    id: 'event-planning',
    name: 'Event Planning',
    description: 'Plan and organize a successful event from concept to execution.',
    category: 'Events',
    icon: '🎉',
    steps: [
      'Define event concept and goals',
      'Set budget and timeline',
      'Choose venue and date',
      'Plan logistics and vendors',
      'Create marketing materials'
    ],
    confidence: 0
  },
  {
    id: 'product-development',
    name: 'Product Development',
    description: 'Bring a product idea from concept to market-ready solution.',
    category: 'Product',
    icon: '🚀',
    steps: [
      'Define product requirements',
      'Create product roadmap',
      'Design user experience',
      'Develop MVP',
      'Plan launch strategy'
    ],
    confidence: 0
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    description: 'Create engaging content for blogs, social media, or marketing materials.',
    category: 'Content',
    icon: '✍️',
    steps: [
      'Research topics and keywords',
      'Create content outline',
      'Write and edit content',
      'Add visuals and media',
      'Plan distribution strategy'
    ],
    confidence: 0
  },
  {
    id: 'research-analysis',
    name: 'Research & Analysis',
    description: 'Conduct thorough research and analysis on a topic or market.',
    category: 'Research',
    icon: '🔍',
    steps: [
      'Define research objectives',
      'Gather data and sources',
      'Analyze findings',
      'Create insights report',
      'Plan next steps'
    ],
    confidence: 0
  }
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { photoData, transcript } = req.body;

    if (!photoData && !transcript) {
      return res.status(400).json({ 
        success: false, 
        error: 'No photo or transcript data provided' 
      });
    }

    // Prepare content for analysis
    let contentToAnalyze = '';
    
    if (transcript) {
      contentToAnalyze += `Voice input: "${transcript}"\n\n`;
    }
    
    if (photoData) {
      contentToAnalyze += 'Image provided for context analysis.\n\n';
    }

    // Analyze content using OpenAI
    const analysisPrompt = `
You are an AI assistant that analyzes user content (photos and voice transcripts) to suggest relevant workflow templates.

Content to analyze:
${contentToAnalyze}

Available workflow categories:
- Project Planning: For organizing and structuring projects
- Marketing Campaign: For launching marketing initiatives
- Event Planning: For organizing events and gatherings
- Product Development: For developing products and features
- Content Creation: For creating blogs, social media, and marketing content
- Research & Analysis: For conducting research and analysis

Please analyze the content and:
1. Provide a brief analysis of what the user is trying to accomplish
2. Suggest the most relevant workflow templates with confidence scores (0-1)
3. Explain why each template is relevant

Respond in JSON format:
{
  "analysis": "Brief analysis of the content and user intent",
  "templates": [
    {
      "id": "template-id",
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

    // Map the analysis results to our template structure
    const suggestedTemplates = workflowTemplates.map(template => {
      const suggestedTemplate = parsedResult.templates?.find(
        (t: { id: string; confidence: number }) => t.id === template.id
      );
      
      return {
        ...template,
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