import styled from 'styled-components';

import DifferentImgL from '../../../public/images/different-refund-large.png';
import DifferentImgS from '../../../public/images/different-refund-small.png';
import NaverPayImg from '../../../public/images/naver-pay.png';
import BenefitImg from '../../../public/images/store-benefit-graph.png';
import QuestionBox from '../../components/QuestionBox';
import Section from '../../components/Section';
import ImageHavingMaxWidth from '../../components/image/ImageHavingMaxWidth';
import ImagesByMediaQuery from '../../components/image/ImagesByMediaQuery';

const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const RefundGraphSection = styled.section`
  background-color: ${({ theme }) => theme.bg3};
  padding: 60px 0 59px 0;
`;

const NaverCouponContainer = styled.div`
  margin-top: 44px;
`;

const Question2 = () => {
  return (
    <>
      <Section bgColor="bg2" paddingT={60}>
        <QuestionBox>
          {'수학대왕 '}<span>프리미엄</span>{'은 \n'}
          {'왜 다른가요?'}
        </QuestionBox>
      </Section>
      <Section bgColor="bg2" paddingT={60} paddingB={60}>
        <Section.Subtitle>자발적 학습을 위한</Section.Subtitle>
        <Section.Title>동기부여가 다르다</Section.Title>
        <Section.Content>학습량에 따른 Point지급으로 동기부여</Section.Content>
        <NaverCouponContainer>
          <AlignCenter>
            <ImageHavingMaxWidth src={NaverPayImg} alt="네이버페이 최대 45000원 환급" maxWidth={272}/>
          </AlignCenter>
        </NaverCouponContainer>
      </Section>
      <RefundGraphSection>
        <AlignCenter>
          <ImageHavingMaxWidth src={BenefitImg} alt="수학대왕과 10개월 공부 시 최대 202% 환급" maxWidth={293}/>
        </AlignCenter>
      </RefundGraphSection>
      <Section bgColor="bg2" paddingT={60} paddingB={60}>
        <AlignCenter>
          <ImagesByMediaQuery small={DifferentImgS} large={DifferentImgL} widthS={335} widthL={764} alt="타 서비스와 달리 공부하면 환급하는 수학대왕"/>
        </AlignCenter>
      </Section>
    </>
  );
};

export default Question2;
