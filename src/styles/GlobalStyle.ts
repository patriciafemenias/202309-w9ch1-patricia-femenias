import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
  }

  body {
    margin: 0;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.accent};
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

   a {
    text-decoration: none;
    color: inherit;
  }
  
  input {
  font: inherit;
}

button {
  border: none;
  background-color: transparent;
  font: inherit;
}
`;

export default GlobalStyle;
