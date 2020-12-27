import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
  }
  
  body {
    margin: 0;
    font-family: Roboto, sans-serif;
    position: relative;
    background-color: ${theme.secondaryColors.grey}
  }

  * {
    box-sizing: border-box;
  }

  a { 
    text-decoration: none;
  }
`;

export { GlobalStyle };
