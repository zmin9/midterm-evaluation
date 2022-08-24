import styled from 'styled-components';
import mediaQuery from '../styles/mediaQuery';
import QLogo from '../statics/Q.png';
import { PropsWithChildren } from 'react';

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
  & > span {
    width: fit-content;
    display: block;

    ${mediaQuery.large} {
      display: inline;
    }
  }
`;

const QuestionBox = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Question>
        {children}
      </Question>
      <img alt='question' src={QLogo} height="100%"/>
    </Container>
  );
};

export default QuestionBox;
