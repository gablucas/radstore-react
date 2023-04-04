import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --font1-24-b: 800 1.5rem/1.1 'Inter';
    --font1-24-sb: 700 1.5rem/1.1 'Inter';
    --font1-20-b: 800 1.25rem/1.1 'Inter';
    --font1-20-m: 500 1.25rem/1.1 'Inter';
    --font1-18-sb: 700 1.125rem/1.1 'Inter';
    --font1-18-m: 500 1.125rem/1.1 'Inter';
    --font1-16-sb: 700 1rem/1.1 'Inter';
    --font1-16-b: 800 1rem/1.1 'Inter';
    --font1-16-r: 400 1rem/1.1 'Inter';
    --font1-14-m: 500 .875rem/1.1 'Inter';
    --font1-14-r: 400 .875rem/1.1 'Inter';
    --font1-12-r: 400 .78rem/1.4 'Inter';
    --font2-48-b: 800 3rem/1.1 'Rubik';
    --font2-48-m: 500 3rem/1 'Rubik';
    --font2-32-bl: 900 2rem/1 'Rubik';
    --font2-24-b: 800 1.5rem/1.1 'Rubik';
    --font2-18-sb: 600 1.125rem/1.1 'Rubik';
    --font2-8-bl: 900 .5rem/1.1 'Rubik';
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

  input {
    background: none;
    outline: none;
    border: none;
  }
`

export { GlobalStyle }