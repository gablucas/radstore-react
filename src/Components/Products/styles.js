import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 20px 80px;
  margin: 40px auto !important;
  max-width: 1440px;

  h1 {
    grid-column: 2;
    font: var(--font2-32-bl);
    text-transform: uppercase;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;

    h1 {
      grid-column: initial;
    }
  }

  @media (max-width: 425px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const ShowProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(255px, 1fr));
  align-items: start;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
    justify-content: center;
  }
  
  @media (max-width: 425px) {
    gap: 20px;
  }
`

