import styled from 'styled-components';
import Typo from './Typo';
import { ReviewInfo } from '../data/review';
import { useCtx } from '../createCtx';

const Card = styled.div`
  padding: 20px 12px 17px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bg1};
`;

const ReviewerProfile = styled.div<Pick<ReviewInfo, 'imgBgColor'>>`
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ imgBgColor }) => imgBgColor};
  }
`;

const ReviewCard = ({ img, imgBgColor, age, lastName, content }: ReviewInfo) => {
  const imgPrefix = useCtx();
  return (
    <Card>
      <ReviewerProfile imgBgColor={imgBgColor}>
        <img src={imgPrefix + img} alt={`profile_image_${lastName}`}/>
        <Typo type="textSR">{age}</Typo>
        <Typo type="textSB">{`\0 ${lastName}OO 학생`}</Typo>
      </ReviewerProfile>
      <Typo type="textSR">{content}</Typo>
    </Card>
  );
};

export default ReviewCard;
