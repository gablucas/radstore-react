import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(200px, 300px) minmax(700px, 1000px);
  align-items: start;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(200px, 300px) minmax(300px, 600px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 20px;
    padding-right: 20px;

  }
`

export const Menu = styled.div`
  padding: 20px;
  background: #FFFFFF;

  span {
    display: block;
    margin-bottom: 20px;
    font: var(--font1-24-b);
    text-align: center;
  }

  li {
    padding: 10px 0px;
    border-top: 1px solid #D9D9D9;
  }

  a.active {
    font-weight: 600;
  }
`

export const DataContainer = styled.div`
  display: grid;
  padding: 20px;
  background: #FFFFFF;

  h1 {
    grid-column: 1/-1;
    margin-bottom: 6px;
    font: var(--font1-16-b);
    text-transform: uppercase;
  }

`



