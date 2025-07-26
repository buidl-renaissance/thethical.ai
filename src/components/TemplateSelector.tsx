import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultTemplates, Template } from '../data/template';

interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  steps: string[];
  confidence: number;
}

interface TemplateSelectorProps {
  onTemplateSelect: (template: WorkflowTemplate) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onTemplateSelect }) => {
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    setTemplates(defaultTemplates);
  }, []);

  const handleTemplateSelect = (template: Template) => {
    const workflowTemplate: WorkflowTemplate = {
      id: template.id,
      name: template.name,
      description: template.description || '',
      category: template.workflow?.category || 'Other',
      icon: template.icon || '📋',
      steps: template.workflow?.steps || [],
      confidence: 1.0 // Full confidence since user explicitly selected
    };
    onTemplateSelect(workflowTemplate);
  };

  return (
    <Container>
      <Header>
        <Title>Choose a Workflow</Title>
        <Subtitle>Select from our curated collection of workflows to get started quickly</Subtitle>
      </Header>

      <TemplatesGrid>
        {templates.map((template) => (
          <TemplateCard key={template.id} onClick={() => handleTemplateSelect(template)}>
            <TemplateIcon>{template.icon}</TemplateIcon>
            <TemplateName>{template.name}</TemplateName>
          </TemplateCard>
        ))}
      </TemplatesGrid>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  margin: ${({ theme }) => theme.spacing[6]} 0;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
`;



const TemplatesGrid = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing[2]} 0;
  
  /* Hide scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
  
  /* Hide scrollbar for IE/Edge */
  -ms-overflow-style: none;
`;

const TemplateCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const TemplateIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  text-align: center;
`;

const TemplateName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  text-align: center;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default TemplateSelector; 