import React from 'react';
import Text from './components/Text';
import Section from './components/Section';

const StoryBook = () => {
  return (
    <>
      <Text type='H1'>H1</Text><br/>
      <Text type='H3'>H3</Text><br/>
      <Text type='textLB'>text Large Bold</Text><br/>
      <Text type='textMR'>text Medium Regular</Text><br/>
      <Section bgColor='bg2' paddingT={60} paddingB={40}>
        <Section.Subtitle text='선순환 구조를 통한 성장'/>
        <Section.Title text='더 많은 학습, 더 빠른 성적 향상'/>
        <Section.Content text={'수학에 재미를 느끼고 자발적 학습시간이 증가\nAI의 고도화로 더욱 빠른 성적 향상'}/>
        <Section.Card>
          하하하하하하하
        </Section.Card>
      </Section>
    </>
  );
};

export default StoryBook;
