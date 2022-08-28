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

const ImagesContainer = styled.div<{ 'widthS': number, 'widthL': number }>`
  span.small {
    display: block;
  }

  span.large {
    display: none;
  }
  
  ${mediaQuery.small} {
    width: ${({ widthS }) => widthS + 'px'};
  }
  
  ${mediaQuery.large} {
    span.small {
      display: none;
    }
    span.large {
      display: block;
    }
    width: ${({ widthL }) => widthL + 'px'};
  }
`;

const ImagesByMediaQuery = ({ small, large, alt, widthS, widthL }: ImagesProps) => {
  return (
    <ImagesContainer widthS={widthS} widthL={widthL}>
      <span className="small">
        <Image src={small} layout="responsive" alt={alt}/>
      </span>
      <span className="large">
        <Image src={large} layout="responsive" alt={alt}/>
      </span>
    </ImagesContainer>
  );
};

export default ImagesByMediaQuery;
