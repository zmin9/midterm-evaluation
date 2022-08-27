import styled from 'styled-components';
import Typo from './Typo';
import { ReviewInfo } from '../data/review';
import Image from 'next/image';

const Card = styled.div`
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

const ReviewCard = ({ img, imgBgColor, age, lastName, content }: ReviewInfo) => {
  return (
    <Card>
      <ReviewerProfile>
        <ProfileImg imgBgColor={imgBgColor}>
          <Image src={img} alt={`프로필사진_${lastName}`} layout='fill' objectFit='cover'/>
        </ProfileImg>
        <Typo type="textSR">{age}</Typo>
        <Typo type="textSB">{`\0 ${lastName}OO 학생`}</Typo>
      </ReviewerProfile>
      <Typo type="textSR">{content}</Typo>
    </Card>
  );
};

export default ReviewCard;
