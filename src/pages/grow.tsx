import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Transcriber from "../components/Transcriber";
import Camera from "@/components/Camera";
import WorkflowEngine from "@/components/WorkflowEngine";
import WorkflowBuilder from "@/components/WorkflowBuilder";
import TemplateSelector from "@/components/TemplateSelector";
import Image from "next/image";

interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  steps: string[];
  confidence: number;
}

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  estimatedTime: string;
}

interface Workflow {
  id: string;
  templateId: string;
  name: string;
  steps: WorkflowStep[];
  createdAt: string;
  status: string;
}

interface ImageAnalysisResult {
  description: string;
  objects: string[];
  text: string[];
  colors: string[];
  mood: string;
  context: string;
  suggestions: string[];
}

// Styled Components using the Clarity theme
const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[8]};
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[10]} 0;
`;

const HeroTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  color: ${({ theme }) => theme.colors.primary};
`;

const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Section = styled.section`
  margin: ${({ theme }) => theme.spacing[4]} 0;
`;

const TranscriptContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[8]};
  margin: ${({ theme }) => theme.spacing[6]} 0;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TranscriptText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;



const Instructions = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  margin: ${({ theme }) => theme.spacing[4]} 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: 25%;
  max-width: 200px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const InstructionsTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
`;

const InstructionsText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[2]} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;

const AnalysisContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
  margin: ${({ theme }) => theme.spacing[4]} 0;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const AnalysisTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const AnalysisSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const AnalysisLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const AnalysisContent = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textInverse};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const ModeToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin: ${({ theme }) => theme.spacing[6]} 0;
`;

const ModeToggleButton = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  border: 2px solid ${({ theme, active }) => 
    active ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme, active }) => 
    active ? theme.colors.accent : theme.colors.white};
  color: ${({ theme, active }) => 
    active ? theme.colors.textInverse : theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme, active }) => 
      active ? theme.colors.accent : theme.colors.accent + '10'};
  }
`;

export default function Grow() {
  const [transcript, setTranscript] = React.useState("");
  const [userImage, setUserImage] = React.useState("");
  const [imageAnalysis, setImageAnalysis] = React.useState<ImageAnalysisResult | null>(null);
  const [selectedTemplate, setSelectedTemplate] = React.useState<WorkflowTemplate | null>(null);
  const [activeWorkflow, setActiveWorkflow] = React.useState<Workflow | null>(null);
  const [showTemplateSelector, setShowTemplateSelector] = React.useState(false);

  const handleTranscriptReady = (newTranscript: string) => {
    setTranscript(newTranscript);
  };

  const generateImage = async (image: string) => {
    console.log("Generating image", image);
  };

  const setError = (error: string) => {
    console.error(error);
  };

  const handleImageAnalysis = (analysis: ImageAnalysisResult) => {
    setImageAnalysis(analysis);
  };

  const handleTemplateSelect = (template: WorkflowTemplate) => {
    setSelectedTemplate(template);
  };

  const handleWorkflowStart = (workflow: Workflow) => {
    setActiveWorkflow(workflow);
    setSelectedTemplate(null);
  };

  const handleBackToTemplates = () => {
    setSelectedTemplate(null);
  };

  return (
    <>
      <Head>
        <title>Grow Your Ideas - The Ethical AI</title>
        <meta
          name="description"
          content="Capture and grow your ideas with voice transcription. Your data, your rules."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Main>
          <Hero>
            <HeroImage src="/images/grow.png" alt="Grow Your Ideas" />
            <HeroTitle>Grow Your Ideas</HeroTitle>
            <HeroDescription>
              Capture your thoughts, ideas, and inspirations with voice
              transcription. Start building something amazing today.
            </HeroDescription>
          </Hero>

          <Section>
            <Instructions>
              <InstructionsText>The images you provide will be used to provide context for your ideas. Upload as many as you want.</InstructionsText>
              <Camera 
                setUserImage={setUserImage} 
                setError={setError} 
                generateImage={generateImage}
                onImageAnalysis={handleImageAnalysis}
              />
              {userImage && (
                <Image src={userImage} alt="User Image" width={256} height={256} />
              )}
              
              {imageAnalysis && (
                <AnalysisContainer>
                  <AnalysisTitle>Image Analysis</AnalysisTitle>
                  
                  <AnalysisSection>
                    <AnalysisLabel>Description</AnalysisLabel>
                    <AnalysisContent>{imageAnalysis.description}</AnalysisContent>
                  </AnalysisSection>
                  
                  <AnalysisSection>
                    <AnalysisLabel>Objects Detected</AnalysisLabel>
                    <TagList>
                      {imageAnalysis.objects.map((object, index) => (
                        <Tag key={index}>{object}</Tag>
                      ))}
                    </TagList>
                  </AnalysisSection>
                  
                  {imageAnalysis.text.length > 0 && (
                    <AnalysisSection>
                      <AnalysisLabel>Text Found</AnalysisLabel>
                      <TagList>
                        {imageAnalysis.text.map((text, index) => (
                          <Tag key={index}>{text}</Tag>
                        ))}
                      </TagList>
                    </AnalysisSection>
                  )}
                  
                  <AnalysisSection>
                    <AnalysisLabel>Colors</AnalysisLabel>
                    <TagList>
                      {imageAnalysis.colors.map((color, index) => (
                        <Tag key={index}>{color}</Tag>
                      ))}
                    </TagList>
                  </AnalysisSection>
                  
                  <AnalysisSection>
                    <AnalysisLabel>Mood</AnalysisLabel>
                    <AnalysisContent>{imageAnalysis.mood}</AnalysisContent>
                  </AnalysisSection>
                  
                  <AnalysisSection>
                    <AnalysisLabel>Context</AnalysisLabel>
                    <AnalysisContent>{imageAnalysis.context}</AnalysisContent>
                  </AnalysisSection>
                  
                  <AnalysisSection>
                    <AnalysisLabel>Suggestions</AnalysisLabel>
                    <TagList>
                      {imageAnalysis.suggestions.map((suggestion, index) => (
                        <Tag key={index}>{suggestion}</Tag>
                      ))}
                    </TagList>
                  </AnalysisSection>
                </AnalysisContainer>
              )}
            </Instructions>
          </Section>
          

          <Section>
            <Instructions>
              <InstructionsTitle>Voice Your Ideas</InstructionsTitle>
              <InstructionsText>
                Click the microphone button to start recording. Speak clearly
                and naturally. When you&apos;re done, click the stop button.
                Your transcript will appear below.
              </InstructionsText>
              <Transcriber onTranscriptReady={handleTranscriptReady} inline />
            </Instructions>

            {transcript && (
              <TranscriptContainer>
                <TranscriptText>{transcript}</TranscriptText>
              </TranscriptContainer>
            )}
          </Section>

          {/* Mode Toggle */}
          <Section>
            <ModeToggleContainer>
              <ModeToggleButton
                active={!showTemplateSelector}
                onClick={() => setShowTemplateSelector(false)}
              >
                AI-Powered Workflows
              </ModeToggleButton>
              <ModeToggleButton
                active={showTemplateSelector}
                onClick={() => setShowTemplateSelector(true)}
              >
                Browse Templates
              </ModeToggleButton>
            </ModeToggleContainer>
          </Section>

          {/* Template Selector */}
          {showTemplateSelector && (
            <TemplateSelector onTemplateSelect={handleTemplateSelect} />
          )}

          {/* Workflow Engine */}
          {!showTemplateSelector && (
            <WorkflowEngine
              photoData={userImage}
              transcript={transcript}
              onTemplateSelect={handleTemplateSelect}
            />
          )}

          {/* Workflow Builder */}
          {selectedTemplate && (
            <WorkflowBuilder
              template={selectedTemplate}
              onWorkflowStart={handleWorkflowStart}
              onBack={handleBackToTemplates}
            />
          )}

          {/* Active Workflow */}
          {activeWorkflow && (
            <div>
              <h3>Active Workflow: {activeWorkflow.name}</h3>
              <p>Workflow started successfully!</p>
            </div>
          )}
        </Main>
      </Container>
    </>
  );
}
