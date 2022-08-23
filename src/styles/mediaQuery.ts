function screenSize(maxWidth: number) {
  return `@media(max-width: ${maxWidth})`;
}

const mediaQuery = {
  large: screenSize(1920),
  small: screenSize(1024),
};

export default mediaQuery;
