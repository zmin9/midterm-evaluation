import styled from 'styled-components';
import Text from './Text';
import { createContext, PropsWithChildren, useContext } from 'react';

type SectionProps = {
  bgColor: BackgroundColorType,
  paddingT?: number,
  paddingB?: number,
};

const SectionContainer = styled.div<SectionProps>`
  background-color: ${({ theme, bgColor }) => theme[bgColor]};
  padding: ${(props) => `${props.paddingT}px 40px ${props.paddingB}px`};
`;

const SectionSubtitle = styled.span`
  color: ${({ theme }) => theme.highlight};
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.headline};

  ${SectionSubtitle} + & {
    margin-top: 4px;
  }
`;

const SectionContent = styled.p`
  color: ${({ theme }) => theme.text1};

  ${SectionTitle} + & {
    margin-top: 12px;
  }
`;

const SectionCard = styled.div<Pick<SectionProps, 'bgColor'>>`
  background-color: ${({ theme, bgColor }) => theme[bgColor]};

  margin-top: 24px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
`;

type BackgroundColorType = 'bg1' | 'bg2';

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

function Card({ children }: PropsWithChildren) {
  const ctx = useContext(BgContext);
  return <SectionCard bgColor={ctx === 'bg1' ? 'bg2' : 'bg1'}>{children}</SectionCard>;
}

Section.Subtitle = ({ text }: { text: string }) => <SectionSubtitle><Text type="textSR">{text}</Text></SectionSubtitle>;
Section.Title = ({ text }: { text: string }) => <SectionTitle><Text type="H3">{text}</Text></SectionTitle>;
Section.Content = ({ text }: { text: string }) => <SectionContent><Text type="textSR">{text}</Text></SectionContent>;
Section.Card = Card;


export default Section;
