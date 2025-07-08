import React, { useState } from 'react';
import styled from 'styled-components';

interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  steps: string[];
  confidence: number;
}

interface WorkflowEngineProps {
  photoData?: string;
  transcript?: string;
  onTemplateSelect: (template: WorkflowTemplate) => void;
}

const WorkflowEngine: React.FC<WorkflowEngineProps> = ({ 
  photoData, 
  transcript, 
  onTemplateSelect 
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestedTemplates, setSuggestedTemplates] = useState<WorkflowTemplate[]>([]);
  const [analysis, setAnalysis] = useState<string>('');

  const analyzeContent = async () => {
    if (!photoData && !transcript) {
      return;
    }

    setIsAnalyzing(true);
    
    try {
      const response = await fetch('/api/analyze-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          photoData,
          transcript,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze content');
      }

      const data = await response.json();
      setSuggestedTemplates(data.templates || []);
      setAnalysis(data.analysis || '');
    } catch (error) {
      console.error('Error analyzing content:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  React.useEffect(() => {
    if (photoData || transcript) {
      analyzeContent();
    }
  }, [photoData, transcript]);

  if (!photoData && !transcript) {
    return null;
  }

  return (
    <Container>
      {isAnalyzing && (
        <AnalysisStatus>
          <Spinner />
          Analyzing your content and finding relevant workflows...
        </AnalysisStatus>
      )}

      {analysis && (
        <AnalysisSection>
          <AnalysisTitle>Content Analysis</AnalysisTitle>
          <AnalysisText>{analysis}</AnalysisText>
        </AnalysisSection>
      )}

      {suggestedTemplates.length > 0 && (
        <TemplatesSection>
          <TemplatesTitle>Suggested Workflows</TemplatesTitle>
          <TemplatesGrid>
            {suggestedTemplates.map((template) => (
              <TemplateCard 
                key={template.id}
                onClick={() => onTemplateSelect(template)}
              >
                <TemplateIcon>{template.icon}</TemplateIcon>
                <TemplateName>{template.name}</TemplateName>
                <TemplateDescription>{template.description}</TemplateDescription>
                <TemplateCategory>{template.category}</TemplateCategory>
                <ConfidenceBadge confidence={template.confidence}>
                  {Math.round(template.confidence * 100)}% match
                </ConfidenceBadge>
              </TemplateCard>
            ))}
          </TemplatesGrid>
        </TemplatesSection>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  margin: ${({ theme }) => theme.spacing[6]} 0;
`;

const AnalysisStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const AnalysisSection = styled.div`
  margin: ${({ theme }) => theme.spacing[6]} 0;
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const AnalysisTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const AnalysisText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const TemplatesSection = styled.div`
  margin: ${({ theme }) => theme.spacing[6]} 0;
`;

const TemplatesTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-align: center;
`;

const TemplatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
`;

const TemplateCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TemplateIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-align: center;
`;

const TemplateName = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const TemplateDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const TemplateCategory = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background: ${({ theme }) => theme.colors.secondaryAccent + '20'};
  color: ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ConfidenceBadge = styled.span<{ confidence: number }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background: ${({ theme, confidence }) => 
    confidence > 0.8 ? theme.colors.accent + '20' : 
    confidence > 0.6 ? theme.colors.secondaryAccent + '20' : 
    theme.colors.border};
  color: ${({ theme, confidence }) => 
    confidence > 0.8 ? theme.colors.accent : 
    confidence > 0.6 ? theme.colors.secondaryAccent : 
    theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export default WorkflowEngine; 