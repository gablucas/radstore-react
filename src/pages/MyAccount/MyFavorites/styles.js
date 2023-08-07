import styled from "styled-components";
import { DataContainer } from "../styles";

export const Container = styled(DataContainer)`

  & > div {
    display: grid;
    grid-template-columns: repeat(4, minmax(80px, 250px));
    gap: 20px;
  }

  @media (max-width: 1024px) {
    & > div {
      grid-template-columns: repeat(3, minmax(80px, 250px));
    }
  }

  @media (max-width: 425px) {
    & > div {
      grid-template-columns: repeat(2, minmax(80px, 250px));
    }
  }
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  span:nth-of-type(1) {
    margin-top: 4px;
    font: var(--font1-14-sb);
    text-transform: uppercase;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:nth-of-type(2) {
    font: var(--font1-16-r);
  }

  @media (max-width: 768px) {

    span:nth-of-type(1) {
      font: var(--font1-12-sb);
    }

    span:nth-of-type(2) {
      font: var(--font1-14-r);
    }
  }
`