import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import mediaQuery from '../../styles/mediaQuery';

type ImageProps = {
  src: StaticImageData,
  alt: string,
  maxWidth: number
};

const ImageContainer = styled.div<Pick<ImageProps, 'maxWidth'>>`
  width: 100%;
  ${mediaQuery.small} {
    width: ${({ maxWidth }) => maxWidth + 'px'};
  }
`;

const ImageHavingMaxWidth = ({ src, alt, maxWidth }: ImageProps) => {
  return (
    <ImageContainer maxWidth={maxWidth}>
      <Image src={src} alt={alt} layout="responsive"/>
    </ImageContainer>
  );
};

export default ImageHavingMaxWidth;
