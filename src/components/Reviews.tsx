import styled from 'styled-components';
import mediaQuery from '../styles/mediaQuery';
import reviews from '../data/review';
import ReviewCard from './ReviewCard';
import Section, { SectionContainer } from './Section';

const ReviewSection = styled(SectionContainer)`
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

const Reviews = () => {
  return (
    <ReviewSection bgColor='bg2' paddingT={60} paddingB={80}>
      <Section.Subtitle>
        REVIEW
      </Section.Subtitle>
      <Section.Title>
        {'실제 수학대왕 '}
        {'학생들의 후기'}
      </Section.Title>
      <ReviewsContainer>
        {
          reviews.map((review) =>
            <ReviewCard key={review.content} {...review}/>,
          )
        }
      </ReviewsContainer>
    </ReviewSection>
  );
};

export default Reviews;
