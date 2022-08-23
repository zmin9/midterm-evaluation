import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }
  
  h1, h2, h3 {
    font-size: 100%;
    margin: 0;
    font-weight: inherit;
  }
  p {
    margin: 0;
  }

  a {
    text-decoration: underline;
    :visited {
      color: currentColor;
    }
  }
`;

export default GlobalStyle;
