import styled from 'styled-components';
import Text from './Text';
import { createContext, PropsWithChildren, ReactElement, useContext } from 'react';
import mediaQuery from '../styles/mediaQuery';

type TextChild = string | ReactElement<HTMLSpanElement>;

type SectionProps = {
  bgColor: BackgroundColorType,
  paddingT?: number,
  paddingB?: number,
};

const SectionContainer = styled.div<SectionProps>`
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
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.headline};

  ${SectionSubtitle} + & {
    margin-top: 4px;
  }

  & > span {
    width: fit-content;
    display: block;

    ${mediaQuery.large} {
      display: inline;
    }
  }
`;

const SectionContent = styled.p`
  color: ${({ theme }) => theme.text1};
  margin-top: 12px;

  & > span {
    width: fit-content;
    display: block;

    ${mediaQuery.large} {
      display: inline;
    }
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

Section.Subtitle = ({ children }: { children: string }) => <SectionSubtitle><Text
  type="textSR">{children}</Text></SectionSubtitle>;
Section.Title = ({ children }: { children: TextChild[] | TextChild }) => (
  <SectionTitle>
    {
      Array.isArray(children) ?
        children.map((child) => <Text key={String(child)} type="H3">{child}</Text>)
        :
        <Text key={String(children)} type="H3">{children}</Text>
    }
  </SectionTitle>
);
Section.Content = ({ children }: { children: TextChild[] | TextChild }) => (
  <SectionContent>
    {
      Array.isArray(children) ?
        children.map((child) => <Text key={String(child)} type="textSR">{child}</Text>)
        :
        <Text key={String(children)} type="textSR">{children}</Text>
    }
  </SectionContent>
);

Section.Card = ({ children }: PropsWithChildren) => {
  const ctx = useContext(BgContext);
  return <SectionCard bgColor={ctx === 'bg1' ? 'bg2' : 'bg1'}>{children}</SectionCard>;
};


export default Section;
