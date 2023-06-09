import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font: var(--font2-24-b);
  }

  @media (max-width: 425px) {
    h1 {
      font: var(--font2-18-b);
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    flex: 1;
    text-align: center;
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

  @media (max-width: 425px) {
    a {
      font: var(--font1-12-sb);
    }
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

  & > div:nth-of-type(1) {
    padding-top: 6px;
    padding-bottom: 6px;
    margin-bottom: 10px;
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
  }

  @media (max-width: 425px) {
    padding: 10px;

    li {
      font: var(--font1-14-m);
    }

    li span {
      font: var(--font1-14-r);
    }
  }
`

export const Products = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(4, 1fr);
  gap: 10px;
  align-items: center;  
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #D9D9D9;

  & > div:first-of-type {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
  }

  & > div:first-of-type span:first-of-type {
    display: block;
  }

  div > span:first-of-type {
    font: var(--font1-12-sb);
    text-transform: uppercase;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div span {
    text-align: start !important;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);

    & > div:first-of-type {
      grid-column: 1/-1;
    }
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(4, auto);

    div > span:nth-of-type(1){
      font: var(--font1-10-sb);
    }

    div > span:nth-of-type(n+2) {
      font: var(--font1-12-r);
    }
  }
`