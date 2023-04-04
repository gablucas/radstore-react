import styled from "styled-components";

const containerGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(4, 1fr);
  justify-items: center;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const ListTitle = styled(containerGrid)`
  grid-column: 1;
  border-top: 1px solid #C8C8C8;
  border-bottom: 1px solid #C8C8C8;
`

export const Product = styled(containerGrid)`
  grid-column: 1;
  border-bottom: 1px solid #C8C8C8;


  select {
    padding: 8px 16px;
  }

  & > div:nth-child(n+2) {
    align-self: center;
  }
`

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 20px;

  
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  span:first-child {
    font: var(--font2-18-sb);
  }

  span:nth-child(n+2) {
    font: var(--font1-16-r);
    color: #2B2B2B;
  }
`

