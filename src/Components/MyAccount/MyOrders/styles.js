import styled from "styled-components";
import { DataContainer } from "../styles";

export const Container = styled(DataContainer)`
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

export const ListTitle = styled(WrapperGrid)`
  padding-top: 10px;
  padding-bottom: 10px;
  grid-column: 1;
  border-top: 1px solid #C8C8C8;
  border-bottom: 1px solid #C8C8C8;
`

export const OrderResume = styled(WrapperGrid)`
  border-bottom: 1px solid #C8C8C8;
  
  a {
    text-decoration: underline;
  }

  a:hover {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    grid-template-columns:repeat(3, auto);
    gap: 4px;
  }
`

export const OrderInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div {
    display: grid;
  }
`

export const OrderProducts = styled.div`
  margin-top: 20px;
  
  & > div {
    display: grid;
    grid-template-columns: 2fr repeat(5, 1fr);
    justify-items: center;
    align-items: center;
  }

  & > div:first-of-type {
    padding: 6px 0px;
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
  }
`
export const OrderProduct = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #D9D9D9;


  div {
    justify-self: start;
    align-items: center;
    display: flex;
    gap: 10px;
  }
`