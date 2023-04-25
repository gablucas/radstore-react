import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font: var(--font2-24-b);
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    flex: 1;
    padding: 10px 0px;
    font: var(--font1-16-b);
    letter-spacing: 1px;
    color: #F7F7F7;
    background: #2B2B2B;
  }

  a:hover {
    color: #2B2B2B;
    background: #FFA700;
  }
`

export const InfoWrapper = styled.div`
  padding: 20px;
  border: 1px solid #2B2B2B ;

  h2 {
    font: var(--font1-16-b);
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  li {
    font: var(--font1-16-m);
  }

  li span {
    font: var(--font1-16-r);
  }

  span:nth-child(n+2) {
    text-align: center;
  }

  & > div {
    display: grid;
    grid-template-columns: 3fr repeat(4, 1fr);
    gap: 10px;
    align-items: center;
  }

  & > div:nth-of-type(1) {
    padding-top: 6px;
    padding-bottom: 6px;
    margin-bottom: 10px;
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
  }
`

export const Products = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #D9D9D9;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  div span {
    text-align: start !important;
  }
`