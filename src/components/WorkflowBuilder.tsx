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
  onBack 
}) => {
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>(
    template.steps.map((step, index) => ({
      id: `step-${index}`,
      title: step,
      description: `Complete this step to move forward with your ${template.name.toLowerCase()}`,
      completed: false,
      estimatedTime: '30-60 min'
    }))
  );

  const [workflowName, setWorkflowName] = useState(`${template.name} - ${new Date().toLocaleDateString()}`);
  const [isStarting, setIsStarting] = useState(false);

  const handleStepToggle = (stepId: string) => {
    setWorkflowSteps(prev => 
      prev.map(step => 
        step.id === stepId 
          ? { ...step, completed: !step.completed }
          : step
      )
    );
  };

  const handleStartWorkflow = async () => {
    setIsStarting(true);
    
    try {
      // Here you would typically save the workflow to your database
      const workflow = {
        id: `workflow-${Date.now()}`,
        templateId: template.id,
        name: workflowName,
        steps: workflowSteps,
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

  const completedSteps = workflowSteps.filter(step => step.completed).length;
  const progressPercentage = (completedSteps / workflowSteps.length) * 100;

  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}>
          ← Back to Templates
        </BackButton>
        <TemplateInfo>
          <TemplateIcon>{template.icon}</TemplateIcon>
          <TemplateDetails>
            <TemplateName>{template.name}</TemplateName>
            <TemplateCategory>{template.category}</TemplateCategory>
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

        <StepsSection>
          <StepsTitle>Workflow Steps</StepsTitle>
          <ProgressBar>
            <ProgressFill progress={progressPercentage} />
          </ProgressBar>
          <ProgressText>
            {completedSteps} of {workflowSteps.length} steps completed
          </ProgressText>
          
          <StepsList>
            {workflowSteps.map((step, index) => (
              <StepItem key={step.id}>
                <StepCheckbox
                  type="checkbox"
                  checked={step.completed}
                  onChange={() => handleStepToggle(step.id)}
                />
                <StepContent>
                  <StepNumber>{index + 1}</StepNumber>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                  <StepTime>{step.estimatedTime}</StepTime>
                </StepContent>
              </StepItem>
            ))}
          </StepsList>
        </StepsSection>

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
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accent + '10'};
  }
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

const TemplateCategory = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background: ${({ theme }) => theme.colors.secondaryAccent + '20'};
  color: ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const DescriptionSection = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

const DescriptionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const DescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const WorkflowSetupSection = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
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
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const StepsSection = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
`;

const StepsTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.accent};
  width: ${({ progress }) => progress}%;
  transition: width ${({ theme }) => theme.transitions.normal};
`;

const ProgressText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const StepItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent + '05'};
  }
`;

const StepCheckbox = styled.input`
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

const StepContent = styled.div`
  flex: 1;
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
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const StepTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const StepTime = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background: ${({ theme }) => theme.colors.secondaryAccent + '20'};
  color: ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
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