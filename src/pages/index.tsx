import Head from "next/head";
import styled from "styled-components";


// Styled Components using the Clarity theme
const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
`;

const Header = styled.header`
  padding: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
`;

const Tagline = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin: ${({ theme }) => theme.spacing[4]} 0 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[8]};
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  padding: ${({ theme }) => theme.spacing[12]} 0;
`;

const HeroTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  color: ${({ theme }) => theme.colors.primary};
`;

const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  margin: ${({ theme }) => theme.spacing[4]};

  &:hover {
    background: ${({ theme }) => theme.colors.accentDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const Section = styled.section`
  margin: ${({ theme }) => theme.spacing[16]} 0;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin: ${({ theme }) => theme.spacing[12]} 0;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[8]};
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const FeatureIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-align: center;
`;

const FeatureTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 900px;
  margin: 0 auto;
`;

const PrincipleCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondaryAccent};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const PrincipleTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  color: ${({ theme }) => theme.colors.primary};
`;

const PrincipleDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const RoadmapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 1000px;
  margin: ${({ theme }) => theme.spacing[8]} auto;
`;

const RoadmapItem = styled.div<{ completed?: boolean }>`
  background: ${({ theme, completed }) => 
    completed ? theme.colors.accent + '10' : theme.colors.white};
  border: 1px solid ${({ theme, completed }) => 
    completed ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const RoadmapStatus = styled.span<{ completed?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background: ${({ theme, completed }) => 
    completed ? theme.colors.accent + '20' : theme.colors.secondaryAccent + '20'};
  color: ${({ theme, completed }) => 
    completed ? theme.colors.accent : theme.colors.secondaryAccent};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const RoadmapText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const HelpText = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing[12]} 0;
  padding: ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

const HelpTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
`;

const HelpDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>The Ethical AI - Understand, Build, Own</title>
        <meta name="description" content="Empowering people with ethical, agentic AI tools to grow their ideas, organize their work, and maintain control of their data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          <Logo>The Ethical AI</Logo>
          <Tagline>Understand, Build, Own</Tagline>
        </Header>

        <Main>
          <Hero>
            <HeroTitle>What would you like help with today?</HeroTitle>
            <HeroDescription>
              Capture your idea. We&apos;ll help you grow it. Your data. Your rules.
            </HeroDescription>
            <CTAButton>Get Started</CTAButton>
          </Hero>

          <Section>
            <SectionTitle>How It Works</SectionTitle>
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>📸</FeatureIcon>
                <FeatureTitle>Photo Capture</FeatureTitle>
                <FeatureDescription>
                  Capture real-world objects, inspiration, or handwritten notes to feed into your project archive.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎙️</FeatureIcon>
                <FeatureTitle>Voice Input</FeatureTitle>
                <FeatureDescription>
                  Use natural language to record ideas, update tasks, or initiate workflows.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🧰</FeatureIcon>
                <FeatureTitle>Smart Templates</FeatureTitle>
                <FeatureDescription>
                  Choose from community-tested templates or build your own to process input and automate steps.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🧩</FeatureIcon>
                <FeatureTitle>Agentic Tools</FeatureTitle>
                <FeatureDescription>
                  Deploy AI agents that assist with writing, organizing, summarizing, planning, and designing.
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </Section>

          <Section>
            <SectionTitle>Our Ethical Principles</SectionTitle>
            <PrinciplesGrid>
              <PrincipleCard>
                <PrincipleTitle>Data Sovereignty</PrincipleTitle>
                <PrincipleDescription>
                  You own your data and control how it&apos;s used.
                </PrincipleDescription>
              </PrincipleCard>
              <PrincipleCard>
                <PrincipleTitle>Transparency</PrincipleTitle>
                <PrincipleDescription>
                  You know what each tool does, how it works, and what it uses.
                </PrincipleDescription>
              </PrincipleCard>
              <PrincipleCard>
                <PrincipleTitle>Empowerment over Replacement</PrincipleTitle>
                <PrincipleDescription>
                  This is not about replacing your creativity—it&apos;s about enhancing it.
                </PrincipleDescription>
              </PrincipleCard>
            </PrinciplesGrid>
          </Section>

          <Section>
            <SectionTitle>Development Roadmap</SectionTitle>
            <RoadmapGrid>
              <RoadmapItem completed>
                <RoadmapStatus completed>✅ Complete</RoadmapStatus>
                <RoadmapText>Voice & Image Input Capture</RoadmapText>
              </RoadmapItem>
              <RoadmapItem completed>
                <RoadmapStatus completed>✅ Complete</RoadmapStatus>
                <RoadmapText>Project Timeline & Archive View</RoadmapText>
              </RoadmapItem>
              <RoadmapItem>
                <RoadmapStatus>🔜 Coming Soon</RoadmapStatus>
                <RoadmapText>Agent Library for Custom Workflows</RoadmapText>
              </RoadmapItem>
              <RoadmapItem>
                <RoadmapStatus>🔜 Coming Soon</RoadmapStatus>
                <RoadmapText>Template Sharing & Community Portal</RoadmapText>
              </RoadmapItem>
              <RoadmapItem>
                <RoadmapStatus>🔜 Coming Soon</RoadmapStatus>
                <RoadmapText>Offline-first & Data Export Options</RoadmapText>
              </RoadmapItem>
            </RoadmapGrid>
          </Section>

          <HelpText>
            <HelpTitle>Ready to get started?</HelpTitle>
            <HelpDescription>
              Join creators, entrepreneurs, and anyone looking to understand and responsibly use AI in their daily work.
            </HelpDescription>
          </HelpText>
        </Main>
      </Container>
    </>
  );
}
