import styled from "styled-components";
import { DataContainer } from "../styles";

export const Container = styled(DataContainer)`

  & > div {
    display: grid;
    grid-template-columns: repeat(4, 250px);
    gap: 20px;
  }
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`