import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;

   box-sizing: border-box;
  }

  body {
    background: #0D1615;
    font-family: 'Roboto', Arial, sans-serif;
    overflow: hidden;
  }
`;

export default GlobalStyles;


