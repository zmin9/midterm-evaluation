import styled from 'styled-components';

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

const ImageWithStretchedBg = (props: ImageProps) => {
  return (
    <ImageContainer>
      <img {...props}/>
    </ImageContainer>
  );
};

export default ImageWithStretchedBg;
