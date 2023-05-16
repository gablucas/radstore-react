import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: start;
  gap: 41px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    & > div {
      display: ${props => props.toggleFilterMobile ? 'initial' : 'none'};
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    & > div:nth-of-type(3) {
      grid-column: 1/-1;
    }
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > span {
    display: block;
    font: var(--font1-20-b);
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
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

  @media (max-width: 1024px) {
    &::before {
      display: none;
    }
  }
`

export const ProductLabel = styled.button`
  padding: 10px;
  min-width: 42px;
  min-height: 42px;
  width: max-content;
  border: 2px solid #000000;
`

export const ProductSize = styled(ProductLabel)`
  display: grid;
  justify-content: center;
  align-items: center;
  font: var(--font1-16-m);


  &:hover {
    background-color: #FFA700;
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
  grid-template-columns: 1fr !important;

  @media (min-width: 425px) and (max-width: 1024px) {
    grid-template-columns: auto auto !important;
  }
`

export const ButtonPrice = styled.button`
  width: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
  font: var(--font1-14-m);
  border: 2px solid #000000;
  background-color: ${props => props.selected ? "#FFA700" : "none"};
`

export const FilterMobile = styled.button`
  display: none;
  grid-column: 1/-1;
  padding: 4px;
  font: var(--font1-16-sb);
  border: 2px solid #000000;


  @media (max-width: 1024px) {
    display: initial;
  }
`