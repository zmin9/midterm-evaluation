type ImagesProps = {
  small: string,
  large: string,
  alt: string
};

const imgPrefix = process.env.NODE_ENV !== 'production' ? '' : process.env.NEXT_PUBLIC_PREFIX;

const ImagesByMediaQuery = ({ small, large, alt }: ImagesProps) => {
  return (
    <picture>
      <source srcSet={imgPrefix + large} media="(min-width: 1024px)"/>
      <img src={imgPrefix + small} alt={alt} width="100%" style={{ display: 'block' }} loading='lazy'/>
    </picture>
  );
};

export default ImagesByMediaQuery;
