import Section from '../../components/Section';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin: 24px -2px 20px;

  ${mediaQuery.large} {
    margin-bottom: 40px;
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  border-radius: 5px;
  border-style: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;


const WhySection = () => {
  return (
    <Section bgColor="bg1" paddingT={60}>
      <Section.Title>
        {'우리 아이 수학성적 \n'}
        {'왜 안오를까요?'}
      </Section.Title>
      <Section.Content>
        {'서울대 출신 대표와 연구진이 만든 \n'}
        {'인공지능 수학 학습앱'}
      </Section.Content>
      <VideoContainer>
        <Iframe src="https://www.youtube-nocookie.com/embed/kb2fdVLIkSU"/>
      </VideoContainer>
    </Section>
  );
};

export default WhySection;
