import styled from 'styled-components';
import Image from 'next/image';

type ImageProps = {
  src: string,
  alt: string,
  height: string
};

const ImageContainer = styled.div<Pick<ImageProps, 'height'>>`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height};
`;

const ImageWithStretchedBg = ({ src, alt, height }: ImageProps) => {
  return (
    <ImageContainer height={height}>
      <Image src={src} alt={alt} layout='fill' objectFit='contain' objectPosition='bottom'/>
    </ImageContainer>
  );
};

export default ImageWithStretchedBg;
