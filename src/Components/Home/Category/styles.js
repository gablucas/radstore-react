import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  justify-items: center;
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  margin-top: 60px;

  h2 {
    display: inline-block;
    margin-bottom: 60px;
    padding: 10px 30px;
    font: var(--font2-48-m);
    color: #FFFFFF;
    background: #000000;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(4, minmax(255px, 1fr));
    justify-content: center;
    gap: 40px;
  }

  @media (max-width: 1024px) {
    & > div {
      grid-template-columns: repeat(3, auto);
    }
  }

  @media (max-width: 768px) {
    button {
      display: initial;
    }

    & > div {
      grid-template-columns: repeat(2, auto);
      gap: 20px;
    }
  }

  @media (max-width: 425px) {
    margin-top: 40px;

    h2 {
      font: var(--font2-24-m);
      margin-bottom: 40px;
    }

    & > div {
      grid-template-columns: repeat(1, auto);
    }

    span:first-of-type {
      font: var(--font1-12-sb);
    }

    span:last-of-type {
      margin-top: 0px;
      font: var(--font1-14-r);
    }
  }

  @media (max-width: 425px) {
    h2 {
      font: var(--font2-20-m);
    }
  }
`


