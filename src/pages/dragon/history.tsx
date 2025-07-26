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
  padding: ${({ theme }) => theme.spacing[4]};
  position: relative;
  
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing[8]};
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

const ContentSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[4]};
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(0, 255, 136, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(10px);
`;

const HistoryText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.8;
  color: #e0e0e0;
`;

const PopulationTable = styled.table`
  width: 100%;
  margin: ${({ theme }) => theme.spacing[6]} 0;
  border-collapse: collapse;
  
  th, td {
    padding: ${({ theme }) => theme.spacing[3]};
    border: 1px solid rgba(0, 255, 136, 0.2);
    text-align: left;
  }
  
  th {
    background: rgba(0, 255, 136, 0.1);
    color: #00ff88;
  }
`;

export default function DragonHistory() {
  return (
    <>
      <Head>
        <title>Detroit Chinatown History - The Dragon&apos;s Path</title>
        <meta name="description" content="The history of Detroit's Chinatown and its evolution through the years" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>The History of Detroit&apos;s Chinatown</Title>
        
        <ContentSection>
          <HistoryText>
            The Chinese community in Detroit has a rich history dating back to the 1870s. The earliest recorded presence shows 14 Chinese washermen living in the city in 1874. By 1905, the first Cantonese restaurants emerged near the Detroit River, marking the beginning of a cultural footprint that would grow significantly over the decades.
          </HistoryText>

          <PopulationTable>
            <thead>
              <tr>
                <th>Year</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1910</td><td>100</td></tr>
              <tr><td>1930</td><td>500</td></tr>
              <tr><td>1950</td><td>3,000</td></tr>
              <tr><td>1970</td><td>2,000</td></tr>
              <tr><td>1990</td><td>100</td></tr>
            </tbody>
          </PopulationTable>

          <HistoryText>
            The original Chinatown was located at Third and Porter, but in the 1960s, it was relocated to Cass and Peterboro when the Detroit Housing Commission condemned the original location. This new location became a cultural hub until various factors, including urban decline and increasing street violence, led to its gradual decline.
          </HistoryText>

          <HistoryText>
            A significant milestone in the community&apos;s history was the Chinatown clinic, operated by the Association of Chinese Americans, which opened in 1973. The clinic served around 300 older Chinese American adults and moved to Peterboro Avenue in 1985 before closing in 1996 due to demographic shifts.
          </HistoryText>

          <HistoryText>
            Today, while the historic Chinatown area retains markers of its past, including a commemorative mural of the Vincent Chin case, the Chinese American community has largely shifted to the suburbs. Metro Detroit&apos;s Asian and Chinese communities are now primarily centered in Ann Arbor and Troy, where the Asian population comprises approximately 15% or more of the total population.
          </HistoryText>
        </ContentSection>
      </Container>
    </>
  );
}
