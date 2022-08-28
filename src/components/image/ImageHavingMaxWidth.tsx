import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import mediaQuery from '../../styles/mediaQuery';

type ImageProps = {
  src: StaticImageData,
  alt: string,
  maxWidth: string
};

const ImageContainer = styled.div<Pick<ImageProps, 'maxWidth'>>`
  ${mediaQuery.small} {
    width: ${({ maxWidth }) => maxWidth};
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
