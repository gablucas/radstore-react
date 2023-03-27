import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 100px;

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
`


