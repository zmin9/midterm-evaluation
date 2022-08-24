type ImagesProps = {
  small: string,
  large: string,
  alt: string
};

const ImageByMediaQuery = ({ small, large, alt }: ImagesProps) => {
  return (
    <picture>
      <source srcSet={large} media="(min-width: 1024px)"/>
      <img src={small} alt={alt} width='100%'/>
    </picture>
  );
};

export default ImageByMediaQuery;
