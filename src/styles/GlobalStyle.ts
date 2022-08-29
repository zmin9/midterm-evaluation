import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
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
    -webkit-text-decoration-color: currentColor;
    
    text-decoration: underline;
    :link {
      color: currentColor;
    }
    :visited {
      color: currentColor;
    }
  }
`;

export default GlobalStyle;
