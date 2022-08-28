import Section from '../../components/Section';

import DiffImage0 from '../../../public/images/diff-graph_0.png';
import DiffImage1 from '../../../public/images/diff-graph_1.png';
import DiffImage2 from '../../../public/images/diff-graph_2.png';
import { StaticImageData } from 'next/image';
import ImageHavingMaxWidth from '../../components/image/ImageHavingMaxWidth';

type Difference = {
  title: string,
  description: string,
  graphImg: StaticImageData,
};

const DifferenceSection = () => {
  const differences: Difference[] = [
    {
      title:'차별화된 몰입감',
      description: '프리미엄 시스템을 통해 자기주도적 몰입 유도',
      graphImg: DiffImage0
    },
    {
      title:'압도적인 문제풀이량',
      description: '프리미엄 시스템을 통해 자발적인 학습 유도',
      graphImg: DiffImage1
    },
    {
      title:'합리적인 가격',
      description: '기존 교육 서비스들에 비해 훨씬 저렴한 가격',
      graphImg: DiffImage2
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
            <ImageHavingMaxWidth src={diff.graphImg} alt={`차이점${idx + 1}`} maxWidth={335}/>
          </Section.Card>
        </Section>
      ))}
    </>
  );
};

export default DifferenceSection;
