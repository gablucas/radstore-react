import styled from "styled-components";

export const Container = styled.div`

  width: 320px;
  height: 320px;

  position: relative;

  a {
    display: flex;
    flex-direction: column;
  }
  
  span:nth-child(2) {
    margin-top: 4px;
    font: var(--font1-16-sm);
  }

  span:nth-child(3) {
    font: var(--font1-16-r);
  }

  button {
    display: none;
  }

  &:hover button {
    display: initial;
  }
`