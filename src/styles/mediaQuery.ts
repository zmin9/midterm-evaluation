function screenSize(minWidth: number) {
  return `@media (min-width: ${minWidth}px)`;
}

const mediaQuery = {
  large: screenSize(1024),
  small: screenSize(375),
};

export default mediaQuery;
