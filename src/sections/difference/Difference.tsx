import Section from '../../components/Section';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import differenceWithOthers from '../../data/differenceWithOthers';


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
      {differenceWithOthers.map((diff, idx) => (
        <Section key={diff.title} bgColor={idx % 2 ? 'bg1' : 'bg2'} paddingT={60} paddingB={40}>
          <Section.Subtitle>{`차이점 ${idx + 1}`}</Section.Subtitle>
          <Section.Title>{diff.title}</Section.Title>
          <Section.Content>{diff.description}</Section.Content>
          <Section.Card>
            <GraphImage src={diff.graphImg}/>
          </Section.Card>
        </Section>
      ))}
    </>
  );
};

export default Difference;
