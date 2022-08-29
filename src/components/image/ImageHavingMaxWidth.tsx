import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import mediaQuery from '../../styles/mediaQuery';

type ImageProps = {
  src: StaticImageData,
  alt: string,
  maxWidth: number,
  className?: string,
  priority?: boolean,
};

const ImageContainer = styled.div<Pick<ImageProps, 'maxWidth'>>`
  width: 100%;
  ${mediaQuery.small} {
    width: ${({ maxWidth }) => maxWidth + 'px'};
  }
`;

const ImageHavingMaxWidth = ({ src, alt, maxWidth, className = '', priority = false }: ImageProps) => {
  return (
    <ImageContainer className={className} maxWidth={maxWidth}>
      <Image src={src} alt={alt} layout="responsive" priority={priority}/>
    </ImageContainer>
  );
};

export default ImageHavingMaxWidth;
