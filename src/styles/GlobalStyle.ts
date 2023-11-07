import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.typography.main};
  }

  body {
    margin: 0;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1, h2 {
    margin-top: 0;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  dl, dt, dd {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
