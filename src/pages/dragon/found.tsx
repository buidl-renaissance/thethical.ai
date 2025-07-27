import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'IBM Plex Serif', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  position: relative;
  
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing[8]};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/noise.png');
    opacity: 0.03;
    pointer-events: none;
  }
`;

const Title = styled.h1`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  color: #00ff88;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  letter-spacing: 0.05em;
  line-height: 1.2;
`;

const Description = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  line-height: 1.6;
  color: #cccccc;
  font-weight: 400;
`;

const InfoSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(0, 255, 136, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  width: 100%;
  max-width: 900px;
  backdrop-filter: blur(10px);
  
  @media (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing[8]};
    padding: ${({ theme }) => theme.spacing[8]};
  }
`;

const InfoTitle = styled.h2`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[8]};
  color: #ffcc00;
  line-height: 1.3;
  
  &:first-child {
    margin-top: 0;
  }
`;

const InfoText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-family: 'IBM Plex Serif', serif;
  color: #e0e0e0;
  line-height: 1.8;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 400;
`;

const ImageContainer = styled.div`
  margin: ${({ theme }) => theme.spacing[8]} 0;
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 400px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(0,255,136,0.1) 0%, rgba(0,255,136,0) 70%);
    pointer-events: none;
  }
`;

const Hashtags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing[8]};
  font-family: 'Share Tech Mono', monospace;
  justify-content: center;
`;

const Tag = styled.span`
  color: #00ff88;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background: rgba(0, 255, 136, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid rgba(0, 255, 136, 0.2);
`;

const EmailSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: rgba(0, 255, 255, 0.08);
  border: 2px solid rgba(0, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  max-width: 600px;
  width: 100%;
  
  @media (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing[8]};
    padding: ${({ theme }) => theme.spacing[8]};
  }
`;

const EmailTitle = styled.h3`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  color: #00ffff;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
`;

const EmailDescription = styled.p`
  color: #cccccc;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 400px;
  margin: 0 auto;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: #e0e0e0;
  font-family: 'IBM Plex Serif', serif;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #666666;
  }
  
  &:focus {
    border-color: #00ffff;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }
  
  &:invalid {
    border-color: #ff4444;
  }
`;

const SubmitButton = styled.button`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 255, 255, 0.1));
  border: 1px solid rgba(0, 255, 255, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: #00ffff;
  font-family: 'Share Tech Mono', monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(0, 255, 255, 0.2));
    border-color: rgba(0, 255, 255, 0.6);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  color: #00ff88;
  font-family: 'Share Tech Mono', monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-family: 'Share Tech Mono', monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: rgba(255, 68, 68, 0.1);
  border: 1px solid rgba(255, 68, 68, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing[6]} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: #e0e0e0;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.6;
`;

const Emoji = styled.span`
  font-size: 1.2em;
  flex-shrink: 0;
  margin-top: 2px;
`;
    
export default function DragonFound() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: 'dragon-found-page'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }
      
      setStatus("success");
      setMessage(data.message || "You've been added to the quest! Check your email for updates.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>The Dragon Found - The Ethical AI</title>
        <meta name="description" content="The dragon has been discovered at the Russell Industrial Center - a historic factory turned creative haven in Detroit" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=IBM+Plex+Serif:wght@400;600&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </Head>

      <Container>
        <Title>The Dragon Has Been Found!</Title>
        
        <Description>
          Deep within the heart of Detroit&apos;s creative renaissance, the guardian has been discovered...
        </Description>

        <ImageContainer>
          <video 
            src="https://dpop.nyc3.digitaloceanspaces.com/uploads/4bFX0uYOMf75972vRDpT11tj9Q2MGRkz8IA8u6hj.mov"
            controls
            autoPlay
            muted
            loop
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          >
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        </ImageContainer>

        <InfoSection>
          <InfoTitle>Where the Dragon Came From</InfoTitle>
          <InfoText>
            Before finding its sanctuary, the dragon emerged from the heart of Detroit&apos;s industrial past— 
            the Russell Industrial Center, where creativity and technology first began to dance together.
          </InfoText>
          
          <ImageContainer style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <video 
              src="https://dpop.nyc3.digitaloceanspaces.com/uploads/NB6IOxz1k58KNJbhkdBlNo54d7R84gQQmQxPtsEG.mov"
              controls
              autoPlay
              muted
              loop
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
            >
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </ImageContainer>
        </InfoSection>

        <InfoSection>
          <InfoTitle>The Russell Industrial Center: A Historic Factory Turned Creative Haven</InfoTitle>
          <InfoText>
            Deep within a sprawling 2-million-square-foot complex on Clay Street in Detroit, 
            the dragon was discovered drifting through concrete corridors filled with the hum of creation. 
            Once the beating heart of the auto industry, this seven-building fortress—designed by a 
            legendary industrial architect—has since been reborn as a sanctuary for artists, 
            technologists, and makers.
          </InfoText>

          <InfoTitle>A Place of Power</InfoTitle>
          <InfoText>
            This site isn&apos;t just historic—it&apos;s charged. From its 1915 steel-and-concrete bones 
            to the expansive glass windows built to flood the factory floor with light, it was 
            once a monument to industrial power. Today, it&apos;s a living organism of creativity—filled 
            with workshops, murals, and experimental technologies. It&apos;s where the lines between 
            past and future blur… and where dragons rest.
          </InfoText>

          <InfoTitle>The Discovery</InfoTitle>
          <InfoText>
            The dragon was found in its natural habitat—a space where human creativity and 
            technological innovation converge. Here, among the artists, makers, and technologists 
            who call the Russell home, the guardian of digital wisdom has found its sanctuary.
          </InfoText>

          <InfoTitle>What This Means</InfoTitle>
          <InfoText>
            The discovery of the dragon at the Russell Industrial Center confirms what many 
            suspected: that the future of ethical AI lies not in isolated laboratories, but in 
            spaces where diverse human experiences and creative energies flow together. The dragon 
            chose this place because it represents the kind of collaborative, human-centered 
            approach to technology that ethical AI requires.
          </InfoText>

          <EmailSection>
            <EmailTitle>Stay Connected with the Quest</EmailTitle>
            <EmailDescription>
              Enter your email to receive exclusive updates about the dragon quest, ethical AI discoveries, 
              and behind-the-scenes insights from Detroit&apos;s creative renaissance.
            </EmailDescription>
            
            <EmailForm onSubmit={handleSubmit}>
              <EmailInput
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
              />
              <SubmitButton type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </SubmitButton>
            </EmailForm>
            
            {status === "success" && (
              <SuccessMessage>{message}</SuccessMessage>
            )}
            
            {status === "error" && (
              <ErrorMessage>{message}</ErrorMessage>
            )}
          </EmailSection>

          <InfoTitle>What You&apos;ll Discover</InfoTitle>
          <FeatureList>
            <FeatureItem>
              <Emoji>✨</Emoji>
              <span>Exclusive updates on the dragon quest and ethical AI development</span>
            </FeatureItem>
            <FeatureItem>
              <Emoji>📜</Emoji>
              <span>Behind-the-scenes insights from Detroit&apos;s creative renaissance</span>
            </FeatureItem>
            <FeatureItem>
              <Emoji>🧠</Emoji>
              <span>Early access to new ethical AI principles and discoveries</span>
            </FeatureItem>
            <FeatureItem>
              <Emoji>🐾</Emoji>
              <span>Special content about the intersection of technology and human creativity</span>
            </FeatureItem>
          </FeatureList>

          <Hashtags>
            <Tag>#DragonFound</Tag>
            <Tag>#RussellIndustrial</Tag>
            <Tag>#DetroitCreativity</Tag>
            <Tag>#EthicalAIHome</Tag>
          </Hashtags>
        </InfoSection>
      </Container>
    </>
  );
}
