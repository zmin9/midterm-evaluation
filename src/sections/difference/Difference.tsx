import Section from '../../components/Section';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import differenceWithOthers from '../../data/differenceWithOthers';
import QuestionBox from '../../components/QuestionBox';
import Text, { Highlight } from '../../components/Text';


const GraphImage = styled.img`
  width: 100%;
  border-radius: 5px;

  ${mediaQuery.large} {
    width: auto;
    height: 335px;
  }
`;

const Difference = () => {
  return (
    <>
      <Section bgColor='bg2' paddingT={60}>
        <QuestionBox>
          <Text type="H1">수학대왕 <Highlight>프리미엄</Highlight>{'은 '}</Text>
          <Text type="H1">무엇이 다른가요?</Text>
        </QuestionBox>
      </Section>
      {differenceWithOthers.map((diff, idx) => (
        <Section key={diff.title} bgColor={idx % 2 ? 'bg1' : 'bg2'} paddingT={60} paddingB={40}>
          <Section.Subtitle>{`차이점 ${idx + 1}`}</Section.Subtitle>
          <Section.Title>{diff.title}</Section.Title>
          <Section.Content>{diff.description}</Section.Content>
          <Section.Card>
            <GraphImage src={diff.graphImg} alt={`difference graph ${idx + 1}`}/>
          </Section.Card>
        </Section>
      ))}
    </>
  );
};

export default Difference;
