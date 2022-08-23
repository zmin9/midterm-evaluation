import styled from 'styled-components';
import Text from './Text';

type ReviewInfo = {
  img: string,
  age: string,
  lastName: string,
  content: string
};

const Card = styled.div`
  padding: 20px 12px 17px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bg1};
`;

const ReviewerProfile = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  // TODO add #344252 palette and set color 
  img {
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: coral;
  };
`;

const ReviewCard = ({ img, age, lastName, content }: ReviewInfo) => {
  return (
    <Card>
      <ReviewerProfile>
        <img src={img} alt={`profile_image_${lastName}`}/>
        <Text type='textSR'>{age}</Text>
        <Text type='textSB'>{' ' + lastName + 'OO 학생'}</Text>
      </ReviewerProfile>
      <Text type='textSR'>{content}</Text>
    </Card>
  );
};

export default ReviewCard;
