import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 300px 1100px;
  justify-content: center;
  align-items: start;
  gap: 40px;
  margin-top: 40px;
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
`

