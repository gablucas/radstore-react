import styled from "styled-components";

export const PaymentWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #C8C8C8;
  cursor: pointer;
  
  h2 {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: ${props => props.selectedPayment ? '10px' : '0px'};
    font: var(--font1-18-sb);
    color: initial;
  }

  h2::before {
    align-self: center;
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #2B2B2B;
    box-shadow: ${props => props.selectedPayment && 'inset 0 0 0 2px #FFFFFF, inset 0 0 0 20px #2B2B2B'};
    border-radius: 50%;
  }

  & > div:nth-of-type(1) {
    display: ${props => props.selectedPayment ? 'initial' : 'none'};
  }

  span {
    display: block;
  }

  span:nth-of-type(1) {
    font: var(--font1-18-sb);
    color: #2B2B2B;
  }

  span:nth-of-type(2) {
    color: #717171;
    margin-bottom: 6px;
  }

  button {
    text-align: start;
    width: 100%;
    font: var(--font1-14-b);
    padding-top: 20px;
    border-top: 1px solid #C8C8C8;
  }

  @media (max-width: 768px) {
    h2 {
      gap: 10px;
      font: var(--font1-16-sb);
    }

    span:nth-of-type(1) {
      font: var(--font1-16-sb);
    }

    p {
      font: var(--font1-14-r);
    }
  }
`

export const PaymentTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #C8C8C8;
  background: ${props => props.selectedCard && 'linear-gradient(90deg, #f1f1f1 10%, #FFFFFF 40%)'};
  cursor: pointer;
  

  &::before {
    grid-row: 1/5;
    align-self: center;
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #2B2B2B;
    box-shadow: ${props => props.selectedCard && 'inset 0 0 0 2px #FFFFFF, inset 0 0 0 20px #2B2B2B'};
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
`