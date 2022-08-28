import TestImage from '../public/images/store-1st-large.png';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

type ImageProps = {
  src: StaticImageData,
  alt: string,
  height: string
};

const ImageContainer = styled.div<Pick<ImageProps, 'height'>>`
  position: relative;
  //display: flex;
  //justify-content: center;
  width: 100%;
`;

const Test = () => {
  return (
    <ImageContainer height='300px'>
      <Image src={TestImage} layout='responsive'/>
    </ImageContainer>
  );
};
export default Test;
