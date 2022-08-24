import ProfileImg0 from '../statics/reviewer_0.png';
import ProfileImg1 from '../statics/reviewer_1.png';
import ProfileImg2 from '../statics/reviewer_2.png';

export type ReviewInfo = {
  img: string,
  imgBgColor: string,
  age: string,
  lastName: string,
  content: string
};

const reviews: ReviewInfo[] = [
  {
    img: ProfileImg0,
    imgBgColor: '#BEFFB8',
    age: '고3',
    lastName: '최',
    content: '수학ㅜㅜ진짜 자신없어서 학원어디다닐까 고민도 많이하고 했는데ㅜㅜ 혼자 실력확인하고 문제도 풀어보고 도움이 많이 되요! 적극추천합니다!'
  },
  {
    img: ProfileImg1,
    imgBgColor: '#FFDE53',
    age: '고2',
    lastName: '김',
    content: '현재 고등수학 앱 중에서 가장 좋은 것 같아요 무엇보다도 부족한 부분만 집중적으로 공부할 수 있도록 문제가 제공되는게 유용한 것 같습니다!!'
  },
  {
    img: ProfileImg2,
    imgBgColor: '#84F8FF',
    age: '중3',
    lastName: '이',
    content: '선행하면서 알게 됐는데 강의도 너무 좋고 무엇보다 수학이 재밌어져서 계속 하게되어요! 이제 고등학생 강의까지 모두 들을거예요 너무 좋아요! '
  }
];

export default reviews;
