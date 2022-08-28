import Section from '../../components/Section';
import QuestionBox from '../../components/QuestionBox';
import { Highlight } from '../../components/Typo';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import ImagesByMediaQuery from '../../components/image/ImagesByMediaQuery';
import ImageHavingMaxWidth from '../../components/image/ImageHavingMaxWidth';

import NaverPayImage from '../../../public/images/naver-pay.png';
import BenefitImage from '../../../public/images/store-benefit-graph.png';

const RefundGraphSection = styled.section`
  background-color: ${({ theme }) => theme.bg3};
  padding: 60px 0 59px 0;
`;

const ResponsivePadding = styled.div`
  ${mediaQuery.large} {
    padding: 0 130px;
  }
`;

const CouponMargin = styled.div`
  margin-top: 44px;
`;

const Question2 = () => {
  return (
    <>
      <Section bgColor="bg2" paddingT={60}>
        <QuestionBox>
          {'수학대왕 '}<Highlight>프리미엄</Highlight>{'은 \n'}
          {'왜 다른가요?'}
        </QuestionBox>
      </Section>
      <Section bgColor="bg2" paddingT={60} paddingB={60}>
        <Section.Subtitle>자발적 학습을 위한</Section.Subtitle>
        <Section.Title>동기부여가 다르다</Section.Title>
        <Section.Content>학습량에 따른 Point지급으로 동기부여</Section.Content>
        <CouponMargin>
          <ImageHavingMaxWidth src={NaverPayImage} alt="네이버페이 최대 45000원 환급" maxWidth="272px"/>
        </CouponMargin>
      </Section>
      <RefundGraphSection>
        <ImageHavingMaxWidth src={BenefitImage} alt="공부할 수록 쌓이는 환급" maxWidth="293px"/>
      </RefundGraphSection>
      <Section bgColor="bg2" paddingT={60} paddingB={60}>
        <ResponsivePadding>
          <ImagesByMediaQuery small='/images/different-refund-small.png' large='/images/different-refund-large.png' alt="타 서비스와 달리 공부하면 환급하는 수학대왕"/>
        </ResponsivePadding>
      </Section>
    </>
  );
};

export default Question2;
