import QImg from '../../public/images/Q.png';
import mediaQuery from '../styles/mediaQuery';
import Text from './Text';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

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
  return (
    <Container>
      <Question>
        <Text type='H1'>
          {children}
        </Text>
      </Question>
      <Image alt="question" src={QImg} width={53} height={60}/>
    </Container>
  );
};

export default QuestionBox;
