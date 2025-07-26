import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import QRCode from "qrcode";

// Styled Components using the Clarity theme
const Container = styled.div`
  min-height: 100vh;
  background: #ffffff;
  color: #000000;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[8]};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  margin: 0 0 ${({ theme }) => theme.spacing[12]} 0;
  color: #000000;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  text-align: center;
`;

const QRCodeContainer = styled.div`
  background: #ffffff;
  padding: ${({ theme }) => theme.spacing[6]};
  /* border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid #000000; */
`;

const QRCodeImage = styled.img`
  display: block;
  max-width: 800px;
  height: auto;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  margin: ${({ theme }) => theme.spacing[6]} 0 0 0;
  color: #000000;
  text-align: center;
`;

export default function Dragon() {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        // Get the current URL
        const currentUrl = window.location.href;
        const qrCodeDataUrl = await QRCode.toDataURL(currentUrl, {
          width: 300,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          }
        });
        setQrCodeDataUrl(qrCodeDataUrl);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    generateQRCode();
  }, []);

  return (
    <>
      <Head>
        <title>Missing Dragon - The Ethical AI</title>
        <meta name="description" content="Missing Dragon QR Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>MISSING DRAGON</Title>
        <QRCodeContainer>
          {qrCodeDataUrl && (
            <QRCodeImage
              width={800}
              height={800}
              src={'https://theethical.ai/dragon'} 
              alt="QR Code linking to this page"
            />
          )}
        </QRCodeContainer>
        <Subtitle>Have you seen me?</Subtitle>
      </Container>
    </>
  );
} 