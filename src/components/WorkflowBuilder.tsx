import React, { useState } from 'react';
import styled from 'styled-components';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  estimatedTime: string;
}

interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  steps: string[];
  questions?: string[];
  confidence: number;
}

interface Workflow {
  id: string;
  templateId: string;
  name: string;
  steps: WorkflowStep[];
  createdAt: string;
  status: string;
}

interface WorkflowBuilderProps {
  template: WorkflowTemplate;
  onWorkflowStart: (workflow: Workflow) => void;
  onBack: () => void;
}

const WorkflowBuilder: React.FC<WorkflowBuilderProps> = ({ 
  template, 
  onWorkflowStart, 
}) => {
  const [workflowName, setWorkflowName] = useState(`${template.name} - ${new Date().toLocaleDateString()}`);
  const [isStarting, setIsStarting] = useState(false);

  const handleStartWorkflow = async () => {
    setIsStarting(true);
    
    try {
      // Here you would typically save the workflow to your database
      const workflow = {
        id: `workflow-${Date.now()}`,
        templateId: template.id,
        name: workflowName,
        steps: template.steps.map((step, index) => ({
          id: `step-${index}`,
          title: step,
          description: `Complete this step to move forward with your ${template.name.toLowerCase()}`,
          completed: false,
          estimatedTime: '30-60 min'
        })),
        createdAt: new Date().toISOString(),
        status: 'active'
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onWorkflowStart(workflow);
    } catch (error) {
      console.error('Error starting workflow:', error);
    } finally {
      setIsStarting(false);
    }
  };

  return (
    <Container>
      <Header>
        <TemplateInfo>
          <TemplateIcon>{template.icon}</TemplateIcon>
          <TemplateDetails>
            <TemplateName>{template.name}</TemplateName>
            {/* <TemplateCategory>{template.category}</TemplateCategory> */}
          </TemplateDetails>
        </TemplateInfo>
      </Header>

      <Content>
        <DescriptionSection>
          <DescriptionTitle>About this workflow</DescriptionTitle>
          <DescriptionText>{template.description}</DescriptionText>
        </DescriptionSection>

        <WorkflowSetupSection>
          <SetupTitle>Customize Your Workflow</SetupTitle>
          <NameInput
            type="text"
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
            placeholder="Enter workflow name"
          />
        </WorkflowSetupSection>

        {template.questions && template.questions.length > 0 && (
          <QuestionsSection>
            <QuestionsTitle>Key Questions to Consider</QuestionsTitle>
            <QuestionsList>
              {template.questions.map((question, index) => (
                <QuestionItem key={index}>
                  <QuestionNumber>{index + 1}</QuestionNumber>
                  <QuestionText>{question}</QuestionText>
                </QuestionItem>
              ))}
            </QuestionsList>
          </QuestionsSection>
        )}

          <StepsTitle>Workflow Steps</StepsTitle>
          
          <StepsList>
            {template.steps.map((step, index) => (
              <StepItem key={index}>
                <StepNumber>{index + 1}</StepNumber>
                <StepText>{step}</StepText>
              </StepItem>
            ))}
          </StepsList>

        <ActionSection>
          <StartButton 
            onClick={handleStartWorkflow}
            disabled={isStarting}
          >
            {isStarting ? 'Starting Workflow...' : 'Start Workflow'}
          </StartButton>
        </ActionSection>
      </Content>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TemplateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const TemplateIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
`;

const TemplateDetails = styled.div``;

const TemplateName = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const DescriptionSection = styled.div`
`;

const DescriptionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const DescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const WorkflowSetupSection = styled.div`
`;

const SetupTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const NameInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.primary};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.6;
  }
`;

const StepsTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const QuestionsSection = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
`;

const QuestionsTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const QuestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const QuestionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.primary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const QuestionNumber = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.secondaryAccent};
  color: white;
  border-radius: 50%;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  flex-shrink: 0;
`;

const QuestionText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const StepItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const StepNumber = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: 50%;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  flex-shrink: 0;
`;

const StepText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[6]} 0;
`;

const StartButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accentDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default WorkflowBuilder; 