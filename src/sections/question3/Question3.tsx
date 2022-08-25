import Section from '../../components/Section';
import QuestionBox from '../../components/QuestionBox';
import Text, { Highlight } from '../../components/Text';
import ImageByMediaQuery from '../../components/ImageByMediaQuery';
import AchievementS from '../../statics/achievement_small.png';
import AchievementL from '../../statics/achievement_large.png';
import styled from 'styled-components';

const AchievementText = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.text2};
  margin-top: 60px;
`;

const Question3 = () => {
  return (
    <>
      <Section bgColor="bg2">
        <QuestionBox>
          <Text type="H1">왜 <Highlight>학습량</Highlight>{'에 따라 '}</Text>
          <Text type="H1">환급을 하나요?</Text>
        </QuestionBox>
      </Section>
      <Section bgColor="bg2" paddingT={24} paddingB={60}>
        <Section.Card>
          <ImageByMediaQuery small={AchievementS} large={AchievementL} alt="학습량에 대해 보상할 때 월등한 학업성취"/>
        </Section.Card>
        <AchievementText>
          <Text type='textMB'>
            학습결과가 아닌 <Highlight>학습량</Highlight>에 보상을 줄 때<br/>
            <Highlight>학업성취도</Highlight>가 올라간다는 연구 결과
          </Text>
        </AchievementText>
      </Section>
    </>
  );
};

export default Question3;
