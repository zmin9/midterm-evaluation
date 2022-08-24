function screenSize(minWidth: number, maxWidth?: number) {
  if (maxWidth === undefined) return `@media (min-width: ${minWidth}px)`;
  return `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
}

const mediaQuery = {
  large: screenSize(1024),
  small: screenSize(0, 1024),
};

export default mediaQuery;
