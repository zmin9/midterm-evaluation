function screenSize(minWidth: number) {
  return `@media (min-width: ${minWidth}px)`;
}

const mediaQuery = {
  large: screenSize(1024),
  small: screenSize(375),
};

type CssValue = number | string | boolean | Record<MediaType, number | string | boolean>;

export const setMediaQuery = (value: CssValue, setCss: (value: CssValue) => string) => {
  if (typeof value !== 'object') return setCss(value);
  return (Object.keys(value) as MediaType[]).reduce((pre, type)=>(
    pre.concat(`${mediaQuery[type]}{${setCss(value[type])}}`)
  ), '');
};

export type MediaType = keyof typeof mediaQuery;
export default mediaQuery;
