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

  a {
    color: ${({ theme }) => theme.text3};
    text-decoration: underline;
  }
`;

export default GlobalStyle;