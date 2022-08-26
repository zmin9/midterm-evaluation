import styled from 'styled-components';
import { useCtx } from '../../createCtx';

type ImageProps = {
  src: string,
  alt: string,
  height: string
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    display: block;
  }
`;

const ImageWithStretchedBg = ({ src, ...props }: ImageProps) => {
  const imgPrefix = useCtx();
  return (
    <ImageContainer>
      <img src={imgPrefix + src} {...props} loading="lazy"/>
    </ImageContainer>
  );
};

export default ImageWithStretchedBg;
