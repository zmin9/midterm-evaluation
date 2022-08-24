import Section from '../../components/Section';
import styled from 'styled-components';
import Video from '../../components/Video';

const VideoContainer = styled.div`
  margin: 24px -2px 0;
`;

const WhySection = () => {
  return (
    <Section bgColor="bg1" paddingT={60} paddingB={20}>
      <Section.Title>
        {'우리 아이 수학성적 '}
        {'왜 안오를까요?'}
      </Section.Title>
      <Section.Content>
        {'서울대 출신 대표와 연구진이 만든 '}
        {'인공지능 수학 학습앱'}
      </Section.Content>
      <VideoContainer>
        <Video url="https://www.youtube-nocookie.com/embed/kb2fdVLIkSU"/>
      </VideoContainer>
    </Section>
  );
};

export default WhySection;
