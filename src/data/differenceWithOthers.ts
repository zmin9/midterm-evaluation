import Graph0 from '../statics/diff-graph_0.png';
import Graph1 from '../statics/diff-graph_1.png';
import Graph2 from '../statics/diff-graph_2.png';

type Difference = {
  title: string,
  description: string,
  graphImg: string,
};

const differenceWithOthers: Difference[] = [
  {
    title:'차별화된 몰입감',
    description: '프리미엄 시스템을 통해 자기주도적 몰입 유도',
    graphImg: Graph0
  },
  {
    title:'압도적인 문제풀이량',
    description: '프리미엄 시스템을 통해 자발적인 학습 유도',
    graphImg: Graph1
  },
  {
    title:'합리적인 가격',
    description: '기존 교육 서비스들에 비해 훨씬 저렴한 가격',
    graphImg: Graph2
  }
];

export default differenceWithOthers;
