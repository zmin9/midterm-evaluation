import mediaQuery from '../../styles/mediaQuery';
import ImageHavingMaxWidth from './ImageHavingMaxWidth';
import { StaticImageData } from 'next/image';
import styled from 'styled-components';

type ImagesProps = {
  small: StaticImageData,
  large: StaticImageData,
  widthS: number,
  widthL: number,
  alt: string,
  priority?: boolean,
};

const Images = styled.div`
  width: 100%;

  ${mediaQuery.small} {
    width: auto;
  }

  .small {
    display: block;
  }

  .large {
    display: none;
  }

  ${mediaQuery.large} {
    .small {
      display: none;
    }

    .large {
      display: block;
    }
  }
`;

const ImagesByMediaQuery = ({ small, large, alt, widthS, widthL, priority = false }: ImagesProps) => {
  return (
    <Images>
      <ImageHavingMaxWidth className="small" src={small} alt={alt} maxWidth={widthS} priority={priority}/>
      <ImageHavingMaxWidth className="large" src={large} alt={alt} maxWidth={widthL} priority={priority}/>
    </Images>
  );
};

export default ImagesByMediaQuery;
