import Section from '../components/Section';
import KakaoTalk from '../statics/kakaotalk.png';
import styled from 'styled-components';
import Typo from '../components/Typo';
import mediaQuery from '../styles/mediaQuery';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const KakaoTalkImage = styled.img`
  width: auto;
  height: 327px;
  margin: 24px 5px 20px;
`;

const ResponseButton = styled.button`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.onButton};
  
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  border-radius: 9999px;
  border: none;
  padding: 12px;
  width: 100%;
  max-width: 732px;

  ${mediaQuery.large} {
    font-size: 20px;
    line-height: 30px;
  }
`;

const PayPremium = () => {
  return (
    <Section bgColor="bg2" paddingT={60} paddingB={40}>
      <Section.Title>귀하의 자녀가 학습을 결심하고 결제를 요청하고 있습니다.</Section.Title>
      <ImageContainer>
        <KakaoTalkImage src={KakaoTalk} alt="프리미엄 결제 요청 알림톡"/>
      </ImageContainer>
      <ResponseButton onClick={() => alert('결제 성공')}>
        <Typo type="textMB">
          자녀분의 요청에 응답하기
        </Typo>
      </ResponseButton>
    </Section>
  );
};

export default PayPremium;
