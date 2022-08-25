import Section from '../../components/Section';
import QuestionBox from '../../components/QuestionBox';
import Text, { Highlight } from '../../components/Text';
import NaverPay from '../../statics/naver-pay.png';
import StoreBenefitGraph from '../../statics/store_benefit_graph.png';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

const RefundGraphSection = styled.section`
  background-color: ${({ theme }) => theme.bg3};
  padding: 60px 44px 59px 38px;

  ${mediaQuery.large} {
    display: flex;
    justify-content: center;
    img{
      width: auto;
      height: 331px;
    }
  }
`;

const Question2 = () => {
  return (
    <>
      <Section bgColor="bg2" paddingT={60}>
        <QuestionBox>
          <Text type="H1">수학대왕 <Highlight>프리미엄</Highlight>{'은 '}</Text>
          <Text type="H1">왜 다른가요?</Text>
        </QuestionBox>
      </Section>
      <Section bgColor="bg2" paddingT={60} paddingB={60}>
        <Section.Subtitle>자발적 학습을 위한</Section.Subtitle>
        <Section.Title>동기부여가 다르다</Section.Title>
        <Section.Content>학습량에 따른 Point지급으로 동기부여</Section.Content>
        <ImageContainer>
          <img src={NaverPay} alt={'네이버페이 최대 45000원 환급'} width="272px"/>
        </ImageContainer>
      </Section>
      <RefundGraphSection>
        <img src={StoreBenefitGraph} width="100%" alt={'공부할 수록 쌓이는 환급'}/>
      </RefundGraphSection>
    </>
  );
};

export default Question2;
