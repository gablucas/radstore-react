import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: start;
  column-gap: 40px;
`

const containerGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(4, 1fr);
  justify-items: center;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(4, auto);
    gap: 10px;
  }
`

export const Product = styled(containerGrid)`
  grid-column: 1;
  border-top: 1px solid #C8C8C8;
  
  & > div {
    display: grid;
    justify-items: center;
  }

  & > div > span {
    margin-bottom: 4px;
  }

  div > span:first-of-type{
    display: block;
    font: var(--font1-12-sb);
    text-transform: uppercase;
  }

  select {
    padding: 8px 16px;
  }

  & > div:nth-child(n+2) {
    align-self: center;
  }

  @media (max-width: 425px) {

    div > span:first-of-type{
      font: var(--font1-10-sb);
    }

    div > span:nth-of-type(n+2) {
      font: var(--font1-12-r);
    }
  }
`

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: minmax(80px, 180px) auto;
  justify-self: start;
  align-items: center;
  gap: 20px;
  
  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  @media (max-width: 1024px) {
    grid-column: 1/-1;
  }

  @media (max-width: 425px) {
    gap: 10px;
  }
`

