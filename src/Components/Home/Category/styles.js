import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  h2 {
    display: inline-block;
    margin-bottom: 40px;
    padding: 10px 30px;
    font: var(--font2-48-m);
    color: #FFFFFF;
    background: #000000;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    gap: 60px;
  }

  @media (max-width: 768px) {
    & > div {
      padding: 0px 20px;
      grid-template-columns: repeat(2, auto);
    }
  }

  @media (max-width: 425px) {
    & > div {
      grid-template-columns: auto;
    }
  }
`


