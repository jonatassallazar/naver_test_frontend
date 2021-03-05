import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    outline: 0;
  }
  body {
    margin: 0;
    padding: 0;
  }
  html, body {
    min-height: 100vh;
    min-width: 100vw;
  }
  html {
    font-size: 10px;
    font-family: Montserrat;
  }
`;

export default GlobalStyle;
