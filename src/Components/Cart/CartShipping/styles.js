import styled from "styled-components";

export const Addresses = styled.div`

  button {
    text-align: start;
    width: 100%;
    font: var(--font1-14-b);
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #C8C8C8;
  }
`

export const RegisterAddress = styled.div`

`

export const AddressWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #C8C8C8;
  background: ${props => props.selectedAddress && 'linear-gradient(90deg, #f1f1f1 10%, #FFFFFF 40%)'};
  cursor: pointer;
  

  &::before {
    grid-row: 1/4;
    align-self: center;
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #2B2B2B;
    box-shadow: ${props => props.selectedAddress && 'inset 0 0 0 2px #FFFFFF, inset 0 0 0 20px #2B2B2B'};
    border-radius: 50%;
  }

  span:nth-of-type(1) {
    margin-bottom: 2px;
    font: var(--font1-18-sb);
    color: initial;
  }

  span {
    color: #2B2B2B;
  }

  @media (max-width: 425px) {

    span {
      font: var(--font1-14-r);
    }

    span:nth-of-type(1) {
      margin-bottom: 2px;
      font: var(--font1-16-sb);
      color: initial;
    }
  }
`