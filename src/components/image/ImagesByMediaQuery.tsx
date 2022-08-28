import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

type ImagesProps = {
  small: StaticImageData,
  large: StaticImageData,
  widthS: number,
  widthL: number,
  alt: string
};

const ImagesContainer = styled.div<{ width: number }>`
  width: calc(100vw - 40px);
  ${mediaQuery.small} {
    width: ${({ width }) => width + 'px'};
  }
`;

const Images = styled.div`
  width: fit-content;
  ${ImagesContainer}.small {
    display: inline-block;
  }

  ${ImagesContainer}.large {
    display: none;
  }

  ${mediaQuery.large} {
    ${ImagesContainer}.small {
      display: none;
    }

    ${ImagesContainer}.large {
      display: inline-block;
    }
  }
`;

const ImagesByMediaQuery = ({ small, large, alt, widthS, widthL }: ImagesProps) => {
  return (
    <Images>
      <ImagesContainer className="small" width={widthS}>
        <Image src={small} layout="responsive" alt={alt}/>
      </ImagesContainer>
      <ImagesContainer className="large" width={widthL}>
        <Image src={large} layout="responsive" alt={alt}/>
      </ImagesContainer>
    </Images>
  );
};

export default ImagesByMediaQuery;
