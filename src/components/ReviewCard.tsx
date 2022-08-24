import styled from 'styled-components';
import Text from './Text';
import { ReviewInfo } from '../data/review';

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
  return (
    <Card>
      <ReviewerProfile imgBgColor={imgBgColor}>
        <img src={img} alt={`profile_image_${lastName}`}/>
        <Text type="textSR">{age}</Text>
        <Text type="textSB">{`\0 ${lastName}OO 학생`}</Text>
      </ReviewerProfile>
      <Text type="textSR">{content}</Text>
    </Card>
  );
};

export default ReviewCard;
