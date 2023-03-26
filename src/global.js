import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --font1-16-sb: 600 1rem/1.1 'Inter';
    --font1-14-m: 500 .875rem/1.1 'Inter';
    --font2-48-bl: 900 3rem/1 'Rubik';
    --font2-48-m: 500 3rem/1 'Rubik';
  }
  
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter';
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    -webkit-font-smoothing: antialised;
  }
  
  button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export { GlobalStyle }