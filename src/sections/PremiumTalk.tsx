import Section from '../components/Section';
import styled from 'styled-components';
import ImageHavingMaxWidth from '../components/image/ImageHavingMaxWidth';
import KakaoTalkImg from '../../public/images/kakaotalk.png';

const ImageContainer = styled.div`
  margin: 24px 5px 0 0;
  & > * {
    margin: 0 auto;
  }
`;

const PremiumTalk = () => {
  return (
    <>
      <Section bgColor="bg2" paddingT={60} paddingB={20}>
        <Section.Title>
        <span style={{ whiteSpace: 'pre-wrap' }}>
          {'귀하의 자녀가 학습을 결심하고\n결제를 요청하고 있습니다.'}
        </span>
        </Section.Title>
        <ImageContainer>
          <ImageHavingMaxWidth src={KakaoTalkImg} alt="프리미엄 결제 요청 알림톡" maxWidth="327px"/>
        </ImageContainer>
      </Section>
    </>
  );
};

export default PremiumTalk;
