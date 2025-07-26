import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'IBM Plex Serif', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing[4]};
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
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-align: center;
  color: #ff6b35;
  text-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
  letter-spacing: 0.05em;
  line-height: 1.2;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`;

const Subtitle = styled.h2`
  font-family: 'IBM Plex Serif', serif;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-align: center;
  color: #cccccc;
  font-style: italic;
  
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`;

const InfoSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  width: 100%;
  max-width: 900px;
  backdrop-filter: blur(10px);
  
  @media (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing[8]};
    padding: ${({ theme }) => theme.spacing[8]};
  }
`;

const InfoTitle = styled.h3`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
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

const PopulationTable = styled.div`
  margin: ${({ theme }) => theme.spacing[6]} 0;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Share Tech Mono', monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const Th = styled.th`
  background: rgba(255, 107, 53, 0.1);
  color: #ff6b35;
  padding: ${({ theme }) => theme.spacing[3]};
  text-align: left;
  border: 1px solid rgba(255, 107, 53, 0.2);
  font-weight: 600;
`;

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid rgba(255, 107, 53, 0.1);
  color: #e0e0e0;
`;

const TimelineSection = styled.div`
  margin: ${({ theme }) => theme.spacing[6]} 0;
  padding: ${({ theme }) => theme.spacing[4]};
  background: rgba(255, 107, 53, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing[6]};
    margin: ${({ theme }) => theme.spacing[8]} 0;
  }
`;

const TimelineItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  padding-left: ${({ theme }) => theme.spacing[4]};
  position: relative;
  font-family: 'IBM Plex Serif', serif;
  color: #e0e0e0;
  line-height: 1.6;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    padding-left: ${({ theme }) => theme.spacing[6]};
    line-height: 1.8;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #ff6b35;
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const Year = styled.span`
  color: #ffcc00;
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spacing[2]};
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
  color: #ff6b35;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-shadow: 0 0 5px rgba(255, 107, 53, 0.3);
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background: rgba(255, 107, 53, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid rgba(255, 107, 53, 0.2);
`;

export default function ChinatownHistory() {
  return (
    <>
      <Head>
        <title>Detroit Chinatown History - The Ethical AI</title>
        <meta name="description" content="The history of Detroit's Chinatown from its early beginnings to modern revitalization efforts" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=IBM+Plex+Serif:wght@400;600&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </Head>

      <Container>
        <Title>Detroit Chinatown</Title>
        <Subtitle>A Story of Resilience, Community, and Revival</Subtitle>

        <InfoSection>
          <InfoTitle>Current State</InfoTitle>
          <InfoText>
            Much of the Metro Detroit Chinese community now lives in the Troy area, alongside other Asian communities such as Koreans. 
            The old Chung&apos;s building (opened in 1940) is being renovated, while a Chinese fusion restaurant Peterboro opened in 2016 
            but closed briefly in the summer of 2023 to refocus. As of 2023, revitalization efforts have been underway for a revival 
            of Detroit&apos;s Chinatown.
          </InfoText>

          <InfoTitle>Historical Population</InfoTitle>
          <PopulationTable>
            <Table>
              <thead>
                <tr>
                  <Th>Census</Th>
                  <Th>Population</Th>
                  <Th>Note</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>1910</Td>
                  <Td>100</Td>
                  <Td>—</Td>
                </tr>
                <tr>
                  <Td>1930</Td>
                  <Td>500</Td>
                  <Td>—</Td>
                </tr>
                <tr>
                  <Td>1950</Td>
                  <Td>3,000</Td>
                  <Td>Peak population</Td>
                </tr>
                <tr>
                  <Td>1970</Td>
                  <Td>2,000</Td>
                  <Td>Decline begins</Td>
                </tr>
                <tr>
                  <Td>1990</Td>
                  <Td>100</Td>
                  <Td>Near complete depopulation</Td>
                </tr>
              </tbody>
            </Table>
          </PopulationTable>

          <InfoTitle>Early History</InfoTitle>
          <InfoText>
            Although it is unclear when Chinese immigrants first arrived in Detroit, as newspapers in the 1800s did not differentiate 
            between the different cultures of East Asia, it is known that in 1874, 14 Chinese washermen lived in the city. 
            In 1905, Detroit&apos;s first two Cantonese chop suey restaurants opened near the Detroit River.
          </InfoText>

          <InfoText>
            However, because the city lacked a central ethnic enclave for Chinese residents, many found it difficult to participate 
            in their cultural practices. An article in the Detroit Free Press in 1917 announced a new apartment building was to be 
            the location of a new Chinatown at the intersection of Third and Porter, an intersection that no longer exists today. 
            The population grew to 2,000 by the 1920s.
          </InfoText>

          <InfoTitle>Relocation and Decline</InfoTitle>
          <InfoText>
            Chinatown was relocated to Cass and Peterboro sometime in the 1960s when the Detroit Housing Commission officially 
            condemned Chinatown. Detroit&apos;s depopulation, urban decline, and escalating street violence, in particular the 
            killing of restaurateur Tommie Lee, led to the new location&apos;s demise.
          </InfoText>

          <InfoText>
            After decades of depopulation and decline, the last Chinese restaurant, &quot;Chung&apos;s&quot;, was closed in the year 2000 
            after 40 years of service. Although there is still a road marker indicating &quot;Chinatown&quot; and a mural commemorating 
            the struggle for justice in the Vincent Chin case, few Chinese American establishments still operate within the City of Detroit.
          </InfoText>

          <TimelineSection>
            <InfoTitle style={{ marginTop: 0, color: '#ff6b35' }}>Key Events Timeline</InfoTitle>
            <TimelineItem>
              <Year>1874:</Year> 14 Chinese washermen documented in Detroit
            </TimelineItem>
            <TimelineItem>
              <Year>1905:</Year> First two Cantonese chop suey restaurants open near Detroit River
            </TimelineItem>
            <TimelineItem>
              <Year>1917:</Year> New Chinatown announced at Third and Porter intersection
            </TimelineItem>
            <TimelineItem>
              <Year>1920s:</Year> Population reaches 2,000 residents
            </TimelineItem>
            <TimelineItem>
              <Year>1960s:</Year> Chinatown relocated to Cass and Peterboro due to condemnation
            </TimelineItem>
            <TimelineItem>
              <Year>1973:</Year> Chinatown clinic opens in On-Leong Merchants Association building
            </TimelineItem>
            <TimelineItem>
              <Year>1985:</Year> Clinic moves to renovated building on Peterboro Avenue
            </TimelineItem>
            <TimelineItem>
              <Year>1990:</Year> Detroit Drop-In Center opens for elderly Chinese Americans
            </TimelineItem>
            <TimelineItem>
              <Year>1996:</Year> Chinatown clinic closes due to demographic changes
            </TimelineItem>
            <TimelineItem>
              <Year>2000:</Year> Chung&apos;s restaurant closes after 40 years of service
            </TimelineItem>
            <TimelineItem>
              <Year>2016:</Year> Chinese fusion restaurant Peterboro opens
            </TimelineItem>
            <TimelineItem>
              <Year>2023:</Year> Revitalization efforts begin for Detroit&apos;s Chinatown revival
            </TimelineItem>
          </TimelineSection>

          <InfoTitle>Healthcare and Elderly Services</InfoTitle>
          <InfoText>
            The Association of Chinese Americans operated a Chinatown clinic in the Cass Corridor Chinatown, which opened on 
            September 9, 1973, in the On-Leong Merchants Association building. At the time of its opening, about 300 older 
            Chinese American adults received services at the clinic. The clinic also served individuals from other age groups. 
            In 1985, the clinic moved to a renovated building on Peterboro Avenue. It closed in 1996 due to demographic changes.
          </InfoText>

          <InfoText>
            The Detroit Drop-In Center, a center providing services to older Chinese Americans in the Cass Chinatown district, 
            opened in October 1990. In January 2011 the main center moved to a new location in the Hannan House along Woodward Avenue.
          </InfoText>

          <InfoTitle>Modern Community</InfoTitle>
          <InfoText>
            Metro Detroit&apos;s Asian and Chinese community is now centered around Ann Arbor and Troy, which are about 15% Asian 
            or higher. The Association of Chinese Americans Detroit Outreach Center, a small community center, serves a handful 
            of new Chinese immigrants who still reside in the Cass Corridor.
          </InfoText>

          <Hashtags>
            <Tag>#DetroitChinatown</Tag>
            <Tag>#ChineseAmerican</Tag>
            <Tag>#DetroitHistory</Tag>
            <Tag>#CommunityRevival</Tag>
            <Tag>#Peterboro</Tag>
            <Tag>#CassCorridor</Tag>
          </Hashtags>
        </InfoSection>
      </Container>
    </>
  );
} 