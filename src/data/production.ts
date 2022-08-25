import Book from '../statics/3d_book.png';
import Video from '../statics/3d_video.png';
import Money from '../statics/3d_money.png';
import Test from '../statics/3d_test.png';

export type Production = {
  title: string,
  description: string,
  imgBgColor: string,
  img: string
};

const production : Production[] = [
  {
    title: '다양한 문제',
    description: '문제집 200권 이상의 분량\n수준 높은 수학 콘텐츠',
    imgBgColor : '#E8F0FD',
    img: Book,
  },
  {
    title: '개념 강의',
    description: '현직 대치동 강사의 기초부터\n확실한 개념 강의',
    imgBgColor : '#FFF1FF',
    img: Video,
  },
  {
    title: '최대 180% 환급',
    description: '10개월 이용시 최대 환급액\n295,000원으로 180%까지 환급',
    imgBgColor : '#FFF1B4',
    img: Money,
  },
  {
    title: '추가적인 학습 지원',
    description: '무제한 오답노트, 단원별 학습\n해설강의등 추가적인 학습지원',
    imgBgColor : '#EDEDFD',
    img: Test,
  }
];

export default production;
