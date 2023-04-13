import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 60px;
  padding: 20px;
  background: #FFFFFF;

  h1 {
    grid-column: 1/-1;
    margin-bottom: 6px;
    font: var(--font1-16-b);
    text-transform: uppercase;
  }

  & > div:nth-of-type(1) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  & > div:nth-of-type(2) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  button {
    font: var(--font1-14-m);
    width: 300px;
    padding: 16px;
    letter-spacing: 1px;
    color: #F7F7F7;
    background: #2B2B2B;
  }
`

