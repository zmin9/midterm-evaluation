import Section from '../components/Section';
import KakaoTalk from '../statics/kakaotalk.png';
import styled from 'styled-components';
import ImageWithStretchedBg from '../components/image/ImageWithStretchedBg';

const ImageContainer = styled.div`
  margin: 24px 5px 0 0;
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
          <ImageWithStretchedBg src={KakaoTalk} alt="프리미엄 결제 요청 알림톡" height="327px"/>
        </ImageContainer>
      </Section>
    </>
  );
};

export default PremiumTalk;
