import styled from "styled-components";
import { DataContainer } from "../styles";

export const Container = styled(DataContainer)`
  grid-template-columns: auto 1fr;
  column-gap: 60px;
  padding: 20px;
  background: #FFFFFF;


  & > div:nth-of-type(1) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  & > div:nth-of-type(2) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  button {
    font: var(--font1-14-m);
    width: 300px;
    padding: 16px;
    letter-spacing: 1px;
    color: #F7F7F7;
    background: #2B2B2B;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;

    & > div:nth-of-type(1) {
      grid-template-columns: 1fr;
      margin-bottom: 40px;
    }
  }
`

