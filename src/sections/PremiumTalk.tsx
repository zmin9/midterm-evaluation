import KakaoTalkImg from '../../public/images/kakaotalk.png';
import Section from '../components/Section';
import ImageHavingMaxWidth from '../components/image/ImageHavingMaxWidth';
import mediaQuery from '../styles/mediaQuery';
import typography from '../styles/typography';
import styled from 'styled-components';

const ImageContainer = styled.div`
  margin: 24px 5px 0 0;
  & > * {
    margin: 0 auto;
  }
`;


const ResponseButton = styled.button`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.onButton};
  ${typography.textMB}

  position: sticky;
  bottom: 20px;
  display: block;
  margin: 0 auto 40px;

  border-radius: 9999px;
  border: none;
  padding: 12px 0;

  width: calc(100% - 40px);
  max-width: 732px;


  ${mediaQuery.large} {
    ${typography.H3}
    padding: 15px 0;
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
          <ImageHavingMaxWidth src={KakaoTalkImg} alt="프리미엄 결제 요청 알림톡" maxWidth={327}/>
        </ImageContainer>
      </Section>
      <ResponseButton onClick={() => alert('결제 성공')}>
        자녀분의 요청에 응답하기
      </ResponseButton>
    </>
  );
};

export default PremiumTalk;
