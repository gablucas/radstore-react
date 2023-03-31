import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 41px;
`

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > span {
    font: var(--font1-20-b);
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: start;
    gap: 12px;
  }

  &::before {
    content: "";
    width: 220px;
    height: 1px;
    background-color: #C8C8C8;

    position: absolute;
    top: -21px;
  }
`

export const ProductLabel = styled.button`
  height: 42px;
  width: 42px;
  border: 2px solid #000000;
`

export const ProductSize = styled(ProductLabel)`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font: var(--font1-20-m);
  }

  &:hover {
    background-color: #FFA700;
  }

  &:hover span {
    font-weight: 700;
  }

  background-color: ${props => props.selected ? "#FFA700" : "none"};
`

export const ProductColor = styled(ProductLabel)`
  background-color: ${props => props.color};
  position: relative;
  box-shadow: ${props => props.selected ? "4px 4px 0px #2B2B2B" : "none"};

  &::after {
    display: none;
    content: "${props => props.colorName}";
    padding: 4px 8px;
    border-radius: 6px;
    color: #FFFFFF;
    background-color: #000000;

    position: absolute;
    top: -28px;
    left: -2px;
    z-index: 999;
  }

  &:hover::after {
    display: initial;
  }
`

export const ProductPrice = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: start;
`

export const ButtonPrice = styled.button`
  width: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
  font: var(--font1-14-m);
  border: 2px solid #000000;
  background-color: ${props => props.selected ? "#FFA700" : "none"};
`