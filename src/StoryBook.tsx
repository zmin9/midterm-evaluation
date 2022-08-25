import React from 'react';
import Typo from './components/Typo';
import Section from './components/Section';
// import Video from './components/Video';
import ReviewCard from './components/ReviewCard';

const StoryBook = () => {
  return (
    <>
      <Typo type='H1'>H1</Typo><br/>
      <Typo type='H3'>H3</Typo><br/>
      <Typo type='textLB'>text Large Bold</Typo><br/>
      <Typo type='textMR'>text Medium Regular</Typo><br/>
      <Section bgColor="bg2" paddingT={60} paddingB={40}>
        <Section.Subtitle>
          선순환 구조를 통한 성장
        </Section.Subtitle>
        <Section.Title>
          더 많은 학습, 더 빠른 성적 향상
        </Section.Title>
        <Section.Content>
          수학에 재미를 느끼고 자발적 학습시간이 증가
          AI의 고도화로 더욱 빠른 성적 향상
        </Section.Content>
        <Section.Card>
          하하하하하하하
        </Section.Card>
      </Section>
      {/*<Section bgColor='bg1' paddingB={40}>*/}
      {/*  <Video url='https://www.youtube-nocookie.com/embed/kb2fdVLIkSU'/>*/}
      {/*</Section>*/}
      <Section bgColor='bg2' paddingT={50} paddingB={50}>
        <ReviewCard
          img=' '
          imgBgColor='red'
          age='고2'
          lastName='김'
          content='현재 고등수학 앱 중에서 가장 좋은 것 같아요 무엇보다도 부족한 부분만 집중적으로 공부할 수 있도록 문제가 제공되는게 유용한 것 같습니다!!' />
      </Section>
    </>
  );
};

export default StoryBook;
