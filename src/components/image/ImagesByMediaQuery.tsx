import { useCtx } from '../../createCtx';

type ImagesProps = {
  small: string,
  large: string,
  alt: string
};

const ImagesByMediaQuery = ({ small, large, alt }: ImagesProps) => {
  const imgPrefix = useCtx();
  return (
    <picture>
      <source srcSet={imgPrefix + large} media="(min-width: 1024px)"/>
      <img src={imgPrefix + small} alt={alt} width="100%" style={{ display: 'block' }} loading='lazy'/>
    </picture>
  );
};

export default ImagesByMediaQuery;
