import styled from "styled-components";
import { DataContainer } from "../styles";

export const Container = styled(DataContainer)`

  h1 {
    margin-bottom: 0px;
  }

  & > a {
    justify-self: end;
    font: var(--font1-14-m);
    text-align: center;
    width: 300px;
    padding: 16px;
    margin-top: 20px;
    letter-spacing: 1px;
    color: #F7F7F7;
    background: #2B2B2B;
  }

  @media (max-width: 425px) {
    & > a {
      justify-self: center;
      width: 100%;
    }
  }
`
const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns:repeat(4, 1fr) 2fr 100px;
  justify-items: center;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font: var(--font1-14-r);

  @media (max-width: 425px) {
    font: var(--font1-12-r);
  }
`

export const OrderResume = styled(WrapperGrid)`
  border-top: 1px solid #C8C8C8;

  div > span:first-child {
    display: block;
    margin-bottom: 8px;
    font: var(--font1-12-sb);
    text-transform: uppercase;
  }


  a {
    text-decoration: underline;
  }

  a:hover {
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    grid-template-columns:repeat(3, auto);
    row-gap: 32px;
  }
`

export const OrderInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div {
    display: grid;
  }

  span {
    margin-top: 6px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 425px) {
    span {
      font: var(--font1-14-r);
    }
  }
`

export const OrderProducts = styled.div`
  margin-top: 20px;
  
  & > div:first-of-type {
    padding: 6px 0px;
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
  }
`

export const OrderProduct = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #D9D9D9;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & > div:first-of-type {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
  }

  & > div:first-of-type span {
    align-self: start;
  }

  div > span:first-of-type {
    font: var(--font1-12-sb);
    text-transform: uppercase;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(5, auto);
    justify-content: start;
    
    & > div:first-of-type {
      justify-self: start;
      grid-column: 1/-1;
    }
  }

  @media (max-width: 425px) {
    gap: 2px;

    div > span:first-of-type {
      font: var(--font1-10-sb);
    }

    div > span:nth-of-type(n+2) {
      font: var(--font1-10-r);
    }
  }
`