import styled from 'styled-components';
import mediaQuery from '../styles/mediaQuery';
import reviews from '../data/review';
import ReviewCard from './ReviewCard';

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
    <ReviewsContainer>
      {
        reviews.map((review) =>
          <ReviewCard key={review.content} {...review}/>,
        )
      }
    </ReviewsContainer>
  );
};

export default Reviews;
