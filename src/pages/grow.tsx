import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Transcriber from "../components/Transcriber";
import Camera from "@/components/Camera";
import Image from "next/image";

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

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
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

export default function Grow() {
  const [transcript, setTranscript] = React.useState("");
  const [userImage, setUserImage] = React.useState("");

  const handleTranscriptReady = (newTranscript: string) => {
    setTranscript(newTranscript);
  };

  const generateImage = async (image: string) => {
    console.log("Generating image", image);
  };

  const setError = (error: string) => {
    console.error(error);
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
              <Camera setUserImage={setUserImage} setError={setError} generateImage={generateImage} />
            </Instructions>
            {/* <Image src={userImage} alt="User Image" width={256} height={256} /> */}
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

          {userImage && (
            <Section>
              <SectionTitle>Your Image</SectionTitle>
              <Image src={userImage} alt="User Image" width={256} height={256} />
            </Section>
          )}
        </Main>
      </Container>
    </>
  );
}
