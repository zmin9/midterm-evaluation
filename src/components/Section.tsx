import styled from 'styled-components';
import { createContext, PropsWithChildren, useContext } from 'react';
import mediaQuery from '../styles/mediaQuery';
import typography from '../styles/typography';

type BackgroundColorType = 'bg1' | 'bg2';

type SectionProps = {
  bgColor: BackgroundColorType,
  paddingT?: number,
  paddingB?: number,
};

export const SectionContainer = styled.section<SectionProps>`
  overflow-x: hidden;
  background-color: ${({ theme, bgColor }) => theme[bgColor]};
  padding: ${(props) => `${props.paddingT}px 20px ${props.paddingB}px`};

  ${mediaQuery.large} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const SectionSubtitle = styled.span`
  color: ${({ theme }) => theme.highlight};
  ${typography.textSR}
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.headline};
  ${typography.H3}

  ${SectionSubtitle} + & {
    margin-top: 4px;
  }

  white-space: pre-wrap;

  ${mediaQuery.large} {
    white-space: normal;
  }
`;

const SectionContent = styled.p`
  color: ${({ theme }) => theme.text1};
  ${typography.textSR}
  margin-top: 12px;

  white-space: pre-wrap;

  ${mediaQuery.large} {
    white-space: normal;
  }
`;

const SectionCard = styled.div<Pick<SectionProps, 'bgColor'>>`
  background-color: ${({ theme, bgColor }) => theme[bgColor]};

  margin-top: 24px;
  border-radius: 5px;
  
  display: flex;
  justify-content: center;
`;

const BgContext = createContext<BackgroundColorType>('bg1');

const Section = ({ children, bgColor = 'bg1', paddingT = 0, paddingB = 0 }: PropsWithChildren<SectionProps>) => {
  return (
    <BgContext.Provider value={bgColor}>
      <SectionContainer bgColor={bgColor} paddingT={paddingT} paddingB={paddingB}>
        {children}
      </SectionContainer>
    </BgContext.Provider>
  );
};

Section.Subtitle = ({ children }: PropsWithChildren) => (
  <SectionSubtitle>
    {children}
  </SectionSubtitle>
);
Section.Title = ({ children }: PropsWithChildren) => (
  <SectionTitle>
    {children}
  </SectionTitle>
);
Section.Content = ({ children }: PropsWithChildren) => (
  <SectionContent>
    {children}
  </SectionContent>
);

Section.Card = ({ children }: PropsWithChildren) => {
  const ctx = useContext(BgContext);
  return <SectionCard bgColor={ctx === 'bg1' ? 'bg2' : 'bg1'}>{children}</SectionCard>;
};


export default Section;
