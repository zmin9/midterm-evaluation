import styled from 'styled-components';
import mediaQuery from '../styles/mediaQuery';
import { PropsWithChildren } from 'react';
import Typo from './Typo';
import { useCtx } from '../createCtx';

const Container = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bg1};
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery.large} {
    padding: 16px 40px 16px 68px;
  }
`;

const Question = styled.h1`
  white-space: pre-wrap;

  ${mediaQuery.large} {
    white-space: normal;
  }
`;

const QuestionBox = ({ children }: PropsWithChildren) => {
  const imgPrefix = useCtx();
  return (
    <Container>
      <Question>
        <Typo type="H1">
          {children}
        </Typo>
      </Question>
      <img alt="question" src={`${imgPrefix}/images/Q.png`} height={60}/>
    </Container>
  );
};

export default QuestionBox;
