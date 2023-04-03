import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  grid-template-columns: auto 600px;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`
export const InfoWrapper = styled.div`

  h1 {
    font: var(--font2-32-bl);
  }

  ul {
    display: flex;
    gap: 10px;
    margin-top: 6px
  }

  div > span {
    font: var(--font1-20-b);
  }
`

export const Price = styled.span`
  display: block;
  margin-top: 4px;
  font: var(--font1-20-m);
`

export const Installments = styled.span`
  display: block;
  margin-bottom: 20px;
  
  font: var(--font1-16-r);
`
  
export const MeasureButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
  font: var(--font1-20-m);
  font-weight: ${props => props.selectedMeasure && "700"};
  border: 2px solid #000000;
  background-color: ${props => props.selectedMeasure && "#FFA700"};
  cursor: pointer;

  &:hover {
    background-color: #FFA700;
    font-weight: 700;
  }

`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 40px;
`

export const ButtonShop = styled.button`
  font: var(--font1-16-sb);
  width: 300px;
  height: 50px;
  transition: filter .3s;

  &:hover {
    filter: brightness(.8);
  }
`

export const BuyButton = styled(ButtonShop)`
  color: #1E1E1E;
  background-color: #FFA700;
`

export const CartButton = styled(ButtonShop)`
  color: #F7F7F7;
  background-color:#1E1E1E;
`

export const AboutWrapper = styled.div`
  margin-top: 40px;

  p {
    font: var(--font1-14-r);
    line-height: 1.4;
    color: #2B2B2B;
  }
`