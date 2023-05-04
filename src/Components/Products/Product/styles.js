import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  a {
    display: flex;
    flex-direction: column;
  }
  
  span:first-of-type {
    margin-top: 4px;
    font: var(--font1-14-sb);
    text-transform: uppercase;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:last-of-type {
    margin-top: 4px;
    font: var(--font1-16-r);
  }

  button {
    display: none;
  }

  &:hover button {
    display: initial;
  }


  @media (max-width: 425px) {

    span:first-of-type {
      font: var(--font1-12-sb);
    }

    span:last-of-type {
      margin-top: 0px;
      font: var(--font1-14-r);
    }
  }
`