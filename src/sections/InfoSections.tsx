import Section from '../components/Section';
import Store1stImageS from '../statics/store-1st-small.png';
import styled from 'styled-components';
import { HTMLAttributes } from 'react';
import Video from '../components/Video';

const Image = styled.img<HTMLAttributes<HTMLImageElement>>`
  border-radius: 5px;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.highlight};
`;

const VideoContainer = styled.div`
  margin: 24px -2px 0;
`;

const InfoSections = () => {
  return (
    <>
      <Section bgColor="bg1" paddingT={60}>
        <Section.Title>
          {'국내 교육 1위 '}
          <span>
          {'인공지능 학습앱 '}
            <Highlight>
            수학대왕
            </Highlight>
          </span>
        </Section.Title>
        <Section.Content>
          <a href="https://platum.kr/archives/171236">
            관련 기사 보러가기
          </a>
        </Section.Content>
        <Section.Card>
          <Image alt="store-1st-app" src={Store1stImageS} height="308px"/>
        </Section.Card>
      </Section>
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
    </>
  );
};

export default InfoSections;
