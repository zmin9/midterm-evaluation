import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import Section, { SectionContainer } from '../../components/Section';
import ReviewInfo from '../../types/review';
import Typo from '../../components/Typo';
import Image from 'next/image';

const ReviewSectionContainer = styled(SectionContainer)`
  background: ${({ theme }) => theme.purpleGradient};

  & > span, h2 {
    color: ${({ theme }) => theme.bg1};
  }
`;

const ReviewsContainer = styled.div`
  margin: 24px 8px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${mediaQuery.large} {
    flex-direction: row;
    margin: 24px -18px 0;
  }
`;

const ReviewCard = styled.div`
  padding: 20px 12px 17px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bg1};
`;

const ReviewerProfile = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div<Pick<ReviewInfo, 'imgBgColor'>>`
  position: relative;
  margin-right: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ imgBgColor }) => imgBgColor};
`;

const ReviewSection = () => {
  const reviews: ReviewInfo[] = [
    {
      img: '/images/reviewer_0.png',
      imgBgColor: '#BEFFB8',
      age: '고3',
      lastName: '최',
      content: '수학ㅜㅜ진짜 자신없어서 학원어디다닐까 고민도 많이하고 했는데ㅜㅜ 혼자 실력확인하고 문제도 풀어보고 도움이 많이 되요! 적극추천합니다!',
    },
    {
      img: '/images/reviewer_1.png',
      imgBgColor: '#FFDE53',
      age: '고2',
      lastName: '김',
      content: '현재 고등수학 앱 중에서 가장 좋은 것 같아요 무엇보다도 부족한 부분만 집중적으로 공부할 수 있도록 문제가 제공되는게 유용한 것 같습니다!!',
    },
    {
      img: '/images/reviewer_2.png',
      imgBgColor: '#84F8FF',
      age: '중3',
      lastName: '이',
      content: '선행하면서 알게 됐는데 강의도 너무 좋고 무엇보다 수학이 재밌어져서 계속 하게되어요! 이제 고등학생 강의까지 모두 들을거예요 너무 좋아요! ',
    },
  ];

  return (
    <ReviewSectionContainer bgColor="bg2" paddingT={60} paddingB={80}>
      <Section.Subtitle>
        REVIEW
      </Section.Subtitle>
      <Section.Title>
        {'실제 수학대왕 \n'}
        {'학생들의 후기'}
      </Section.Title>
      <ReviewsContainer>
        {
          reviews.map(({ lastName, content, age, img, imgBgColor }: ReviewInfo) =>
            <ReviewCard key={lastName + age}>
              <ReviewerProfile>
                <ProfileImg imgBgColor={imgBgColor}>
                  <Image src={img} alt={`프로필사진_${lastName}`} layout="fill" objectFit="cover"/>
                </ProfileImg>
                <Typo type="textSR">{age}</Typo>
                <Typo type="textSB">{`\0 ${lastName}OO 학생`}</Typo>
              </ReviewerProfile>
              <Typo type="textSR">{content}</Typo>
            </ReviewCard>,
          )
        }
      </ReviewsContainer>
    </ReviewSectionContainer>
  );
};

export default ReviewSection;
