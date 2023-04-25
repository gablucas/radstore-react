import styled from "styled-components";
import { DataContainer } from "../styles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const AccountWrapper = styled(DataContainer)`
  align-content: space-between;
  padding: 20px;
  background: #FFFFFF;

  ul {
    display: grid;
    gap: 6px;
  }

  li {
    font: var(--font1-16-m);
  }

  li span {
    font: var(--font1-16-r);
  }

  a {
    justify-self: start;
    margin-top: 20px;
    padding: 10px 20px;
    font: var(--font1-14-m);
    letter-spacing: 1px;
    color: #F7F7F7;
    background: #2B2B2B;
  }
`