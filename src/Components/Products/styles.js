import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  gap: 20px 80px;
  margin: 0 auto !important;
  width: 1440px;

  h1 {
    grid-column: 2;
    font: var(--font2-32-bl);
    text-transform: uppercase;
  }
`

export const ShowProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px 40px;
`

