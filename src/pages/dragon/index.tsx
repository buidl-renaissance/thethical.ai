import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: "IBM Plex Serif", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing[2]};
  position: relative;
  overflow-y: auto;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing[8]};
    justify-content: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/noise.png");
    opacity: 0.03;
    pointer-events: none;
  }
`;

const Title = styled.h1`
  font-family: "UnifrakturCook", "Cinzel Decorative", serif;
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle,
      rgba(0, 255, 255, 0.1) 0%,
      rgba(0, 255, 255, 0) 70%
    );
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
  text-align: center;

  @media (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing[8]};
    padding: ${({ theme }) => theme.spacing[8]};
  }
`;

const InfoTitle = styled.h2`
  font-family: "UnifrakturCook", "Cinzel Decorative", serif;
  font-size: clamp(2.5rem, 2.5vw, 2rem);
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
  font-family: "IBM Plex Serif", serif;
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

const Hashtags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing[6]};
  font-family: "Share Tech Mono", monospace;
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

const LocationButton = styled.button`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  background: linear-gradient(
    135deg,
    rgba(255, 204, 0, 0.2),
    rgba(255, 204, 0, 0.1)
  );
  border: 1px solid rgba(255, 204, 0, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: #ffcc00;
  font-family: "Share Tech Mono", monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: ${({ theme }) => theme.spacing[4]};

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 204, 0, 0.3),
      rgba(255, 204, 0, 0.2)
    );
    border-color: rgba(255, 204, 0, 0.6);
    box-shadow: 0 0 15px rgba(255, 204, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LocationInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: rgba(255, 204, 0, 0.1);
  border: 1px solid rgba(255, 204, 0, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: "Share Tech Mono", monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: #ffcc00;
  text-align: center;
`;

const LocationError = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: rgba(255, 68, 68, 0.1);
  border: 1px solid rgba(255, 68, 68, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: "Share Tech Mono", monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: #ff4444;
  text-align: center;
`;

export default function Dragon() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [locationStatus, setLocationStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [locationError, setLocationError] = useState("");
  const [isFound, setIsFound] = useState(false);

  // Calculate distance between two coordinates in feet
  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const R = 20902231; // Earth's radius in feet
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleGetLocation = () => {
    setLocationStatus("loading");
    setLocationError("");
    setIsFound(false);

    if (!navigator.geolocation) {
      setLocationStatus("error");
      setLocationError("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setLocationStatus("success");

        // Check if within 30 feet of target location
        const targetLat = 42.344417;
        const targetLng = -83.06026;
        const distance = calculateDistance(
          latitude,
          longitude,
          targetLat,
          targetLng
        );

        if (distance <= 100) {
          setIsFound(true);
        }
      },
      (error) => {
        setLocationStatus("error");
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError(
              "Location access denied. Please enable location services."
            );
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information unavailable.");
            break;
          case error.TIMEOUT:
            setLocationError("Location request timed out.");
            break;
          default:
            setLocationError("An unknown error occurred.");
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  return (
    <>
      <Head>
        <title>The Missing Dragon - The Ethical AI</title>
        <meta
          name="description"
          content="An urgent call from the heart of Detroit's creative engine - a guardian of digital wisdom has vanished"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=IBM+Plex+Serif:wght@400;600&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <Title>The Mystery of the Missing Dragon</Title>

        <Description>
          Somewhere between steel beams and stardust, a guardian of digital
          wisdom has vanished...
        </Description>

        <ImageContainer>
          {isFound ? (
            <video
              src="https://dpop.nyc3.digitaloceanspaces.com/uploads/4bFX0uYOMf75972vRDpT11tj9Q2MGRkz8IA8u6hj.mov"
              controls
              autoPlay
              muted
              loop
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            >
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src="/images/dragon.png"
              alt="Missing Dragon"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          )}
        </ImageContainer>

        <InfoSection>
          <InfoTitle>The Dragon Quest</InfoTitle>
          <InfoText>
            In the heart of Detroit&apos;s creative renaissance, a guardian of
            digital wisdom has vanished. This isn&apos;t just any
            guardian—it&apos;s a dragon that embodies the principles of
            creativity and innovation, born from the intersection of human
            imagination and technological possibility. Some say it chose to
            disappear, waiting for those who understand that the future lies not
            in isolated systems, but in the spaces where diverse human
            experiences converge.
          </InfoText>
          <InfoText>
            The dragon&apos;s disappearance has left behind a trail of clues,
            each one revealing deeper insights into how creativity can emerge
            from collaborative exploration. Those who follow the trail
            don&apos;t just find a dragon—they discover the principles that will
            guide innovation for generations to come.
          </InfoText>

          <QuestSection>
            <InfoTitle>The Clue</InfoTitle>
            <InfoText
              style={{
                marginBottom: "1rem",
                fontWeight: "600",
                color: "#ffcc00",
              }}
            >
              The Forgotten Gate
            </InfoText>
            <InfoText
              style={{
                fontStyle: "italic",
                color: "#e0e0e0",
                marginBottom: "1rem",
              }}
            >
              I do not burn, yet light the way.
              <br />
              I do not speak, yet welcome all.
              <br />
              <br />
              Beside me, memories become permanent.
              <br />
              Stories and symbols etched into skin.
            </InfoText>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <LocationButton
                onClick={handleGetLocation}
                disabled={locationStatus === "loading"}
              >
                {locationStatus === "loading"
                  ? "Locating..."
                  : "📍 Activate Locator"}
              </LocationButton>

              {locationStatus === "success" && location && (
                <LocationInfo>
                  {isFound ? (
                    <>
                      🎉 LANTERN FOUND! 🎉
                      <br />
                      <small>You&apos;ve discovered the lantern!</small>
                    </>
                  ) : (
                    <>
                      🔍 Keep Searching...
                      <br />
                      📏 Distance:{" "}
                      {calculateDistance(
                        location.lat,
                        location.lng,
                        42.344417,
                        -83.06026
                      ).toFixed(1)}{" "}
                      feet away
                      <br />
                    </>
                  )}
                </LocationInfo>
              )}

              {locationStatus === "error" && (
                <LocationError>❌ {locationError}</LocationError>
              )}
            </div>
          </QuestSection>

          <Hashtags>
            <Tag>#MissingDragon</Tag>
            <Tag>#DigitalLore</Tag>
            <Tag>#DetroitAwakens</Tag>
          </Hashtags>

          <InfoText
            style={{
              textAlign: "center",
              marginTop: "1rem",
              fontSize: "0.6rem",
            }}
          >
            Be part of the movement shaping the future of creativity and
            innovation.
          </InfoText>
        </InfoSection>
      </Container>
    </>
  );
}
