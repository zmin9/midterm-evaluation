import Section from '../../components/Section';
import ImageWithStretchedBg from '../../components/image/ImageWithStretchedBg';

type Difference = {
  title: string,
  description: string,
  graphImg: string,
};

const DifferenceSection = () => {
  const differences: Difference[] = [
    {
      title:'차별화된 몰입감',
      description: '프리미엄 시스템을 통해 자기주도적 몰입 유도',
      graphImg: '/images/diff-graph_0.png'
    },
    {
      title:'압도적인 문제풀이량',
      description: '프리미엄 시스템을 통해 자발적인 학습 유도',
      graphImg: '/images/diff-graph_1.png'
    },
    {
      title:'합리적인 가격',
      description: '기존 교육 서비스들에 비해 훨씬 저렴한 가격',
      graphImg: '/images/diff-graph_2.png'
    }
  ];
  return (
    <>
      {differences.map((diff, idx) => (
        <Section key={diff.title} bgColor={idx % 2 ? 'bg1' : 'bg2'} paddingT={60} paddingB={40}>
          <Section.Subtitle>{`차이점 ${idx + 1}`}</Section.Subtitle>
          <Section.Title>{diff.title}</Section.Title>
          <Section.Content>{diff.description}</Section.Content>
          <Section.Card>
            <ImageWithStretchedBg height='335px' src={diff.graphImg} alt={`차이점${idx + 1}`}/>
          </Section.Card>
        </Section>
      ))}
    </>
  );
};

export default DifferenceSection;
