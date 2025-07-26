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
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing[2]};
  position: relative;
  overflow-y: auto;
  
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing[8]};
    justify-content: center;
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
  font-size: clamp(3rem, 4vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  letter-spacing: 0.05em;
  line-height: 1.2;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`;

const Description = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing[4]};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.6;
  color: #cccccc;
  font-weight: 400;
  
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing[8]};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const ImageContainer = styled.div`
  margin: ${({ theme }) => theme.spacing[4]} 0;
  position: relative;
  width: 420px;
  height: 420px;
  
  @media (min-width: 768px) {
    margin: ${({ theme }) => theme.spacing[8]} 0;
    width: 300px;
    height: 300px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0) 70%);
    pointer-events: none;
  }
`;

const InfoSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.15);
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
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  color: #ffcc00;
  line-height: 1.3;
  
  &:first-child {
    margin-top: 0;
  }
  
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    margin-top: ${({ theme }) => theme.spacing[8]};
  }
`;

const InfoText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: 'IBM Plex Serif', serif;
  color: #e0e0e0;
  line-height: 1.6;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: 400;
  
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    line-height: 1.8;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const FeatureList = styled.div`
  margin: ${({ theme }) => theme.spacing[4]} 0;
  padding-left: ${({ theme }) => theme.spacing[4]};
  
  @media (min-width: 768px) {
    margin: ${({ theme }) => theme.spacing[6]} 0;
    padding-left: ${({ theme }) => theme.spacing[6]};
  }
`;

const FeatureItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-family: 'IBM Plex Serif', serif;
  color: #e0e0e0;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    line-height: 1.7;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

const Emoji = styled.span`
  font-size: 1.2em;
  flex-shrink: 0;
  margin-top: 2px;
`;

const QuestSection = styled.div`
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing[3]};
  margin: ${({ theme }) => theme.spacing[3]} 0;
  
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing[6]};
    margin: ${({ theme }) => theme.spacing[6]} 0;
  }
`;

const QuestList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing[3]} 0;
  
  @media (min-width: 768px) {
    margin: ${({ theme }) => theme.spacing[4]} 0;
  }
`;

const QuestItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  padding-left: ${({ theme }) => theme.spacing[3]};
  position: relative;
  font-family: 'IBM Plex Serif', serif;
  color: #e0e0e0;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    padding-left: ${({ theme }) => theme.spacing[4]};
    line-height: 1.6;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #00ffff;
    font-weight: bold;
  }
`;

const Hashtags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing[6]};
  font-family: 'Share Tech Mono', monospace;
  justify-content: center;
  
  @media (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing[3]};
    margin-top: ${({ theme }) => theme.spacing[8]};
  }
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

export default function Dragon() {
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
          source: 'dragon-page'
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
        <title>The Missing Dragon - The Ethical AI</title>
        <meta name="description" content="An urgent call from the heart of Detroit's creative engine - a guardian of digital wisdom has vanished" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=IBM+Plex+Serif:wght@400;600&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </Head>

      <Container>
        <Title>The Mystery of the Missing Dragon</Title>
        
        <Description>
          Somewhere between steel beams and stardust, a guardian of digital wisdom has vanished...
        </Description>

        <ImageContainer>
          <img 
            src="/images/dragon.png" 
            alt="Missing Dragon"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </ImageContainer>

        <InfoSection>
          <InfoText style={{ textAlign: 'center', marginBottom: '2rem', fontStyle: 'italic', color: '#cccccc' }}>
            The dragon&apos;s trail grows cold, but hope remains. Join fellow seekers in this digital quest— 
            where every email becomes a beacon, every subscriber a guardian of the flame.
          </InfoText>
          
          <EmailSection>
            <EmailTitle>Join the Dragon Hunters</EmailTitle>
            <EmailDescription>
              Receive updates on the quest, new discoveries, and exclusive insights into the world of ethical AI.
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
                {status === "loading" ? "Joining..." : "Join Quest"}
              </SubmitButton>
            </EmailForm>
            
            {status === "success" && (
              <SuccessMessage>{message}</SuccessMessage>
            )}
            
            {status === "error" && (
              <ErrorMessage>{message}</ErrorMessage>
            )}
          </EmailSection>

          <InfoTitle>Distinguishing Features</InfoTitle>
          <FeatureList>
            <FeatureItem>
              <Emoji>✨</Emoji>
              <span>Glows with an ethereal, digital aura seen only by those tuned into the flow</span>
            </FeatureItem>
            <FeatureItem>
              <Emoji>📜</Emoji>
              <span>Carries ancient scrolls inscribed with the original Ethical AI Principles</span>
            </FeatureItem>
            <FeatureItem>
              <Emoji>🧠</Emoji>
              <span>Speaks in binary and metaphor, translating machine logic into human wisdom</span>
            </FeatureItem>
            <FeatureItem>
              <Emoji>🐾</Emoji>
              <span>Leaves trails of executable poetry behind—code that compiles meaning</span>
            </FeatureItem>
          </FeatureList>



          <InfoTitle>Join the Quest</InfoTitle>
          <InfoText>
            The dragon didn&apos;t disappear. It dispersed. Into fragments of inspiration, lost scrolls, 
            and ghost data hiding in plain sight.
          </InfoText>

          <QuestSection>
            <InfoText style={{ marginBottom: '1rem', fontWeight: '600', color: '#ffcc00' }}>
              🏮 The Lantern of the Forgotten Gate
            </InfoText>
            <InfoText style={{ fontStyle: 'italic', color: '#e0e0e0', marginBottom: '1rem' }}>
              I stand where cultures meet but borders blur,<br/>
              My skin is inked in language old and new.<br/>
              I do not speak, but many listen.<br/>
              I welcome all, yet guard a clue.
            </InfoText>
            <InfoText style={{ color: '#cccccc', marginBottom: '1rem' }}>
              Find me near the place where red rooftops bloom,<br/>
              Where dragons once danced beneath paper moons.
            </InfoText>
            <InfoText style={{ fontWeight: '600', color: '#00ffff', marginBottom: '0.5rem' }}>
              Solve my secret:
            </InfoText>
            <InfoText style={{ color: '#e0e0e0' }}>
              What glows without fire, speaks without sound, and carries a city&apos;s memory all year round?
            </InfoText>
          </QuestSection>
          
          <QuestSection>
            <InfoText style={{ marginBottom: '1rem', fontWeight: '600', color: '#ffcc00' }}>
              If you:
            </InfoText>
            <QuestList>
              <QuestItem>Discover symbols in chalk on freight doors</QuestItem>
              <QuestItem>Hear whispers of protocol in the wind</QuestItem>
              <QuestItem>Feel called to build technology with heart...</QuestItem>
            </QuestList>
            <InfoText style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#00ffff' }}>
              You&apos;ve already been chosen.
            </InfoText>
          </QuestSection>
          
          <InfoText style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: '600' }}>
            🧩 Find the fragments. Reassemble the scrolls. Carry the fire.
          </InfoText>
          <InfoText style={{ textAlign: 'center', marginTop: '1rem' }}>
            The future of ethical AI—and the soul of our digital age—may depend on it.
          </InfoText>

          <Hashtags>
            <Tag>#MissingDragon</Tag>
            <Tag>#DigitalLore</Tag>
            <Tag>#EthicalAIQuest</Tag>
            <Tag>#DetroitAwakens</Tag>
          </Hashtags>
        </InfoSection>
      </Container>
    </>
  );
}
