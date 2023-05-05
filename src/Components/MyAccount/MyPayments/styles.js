import styled from "styled-components";
import { DataContainer } from "../styles";

export const Container = styled(DataContainer)`

  button {
      text-align: start;
      width: 100%;
      font: var(--font1-14-b);
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #C8C8C8;
    }
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 240px;
  align-items: center;
  padding-left: 10px;
  column-gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #C8C8C8;
  
  cursor: pointer;

  &:first-of-type {
    background: linear-gradient(90deg, #f1f1f1 10%, #FFFFFF 40%);
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div:first-of-type span:first-of-type {
    margin-bottom: 2px;
    font: var(--font1-18-sb);
    color: initial;
  }

  div:last-of-type {
    gap: 4px;
    text-align: center;
    font: var(--font1-14-r);

    span:hover {
      font-weight: 600;
    }
  }

  span {
    color: #2B2B2B;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 100px;
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr auto ;
  }
`