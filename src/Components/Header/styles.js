import styled from "styled-components";

export const Container = styled.header`
  padding-left: 40px;
  padding-right: 40px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: var(--font1-16-sb);


  ul, div {
    display: flex;
  }

  li > a {
    padding: 40px 20px;
  }
`

export const Menu = styled.li`

  & > div {
    display: none;
    grid-template-columns: repeat(3, 120px);
    justify-content: center;
    gap: 100px;

    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    color: #FFFFFF;
  }

  & > div h3 {
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  &:hover > div {
    display: grid;
  }

  &:hover {
    color: rgba(0, 0, 0, .6);
  }

  &:hover::after {
    content: '';
    display: block;
    background: #2B2B2B;

    position: absolute;
    top: 110px;
    left: 0px;
    height: 400px;
    width: 100%;
    z-index: 999;
  }
`

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;

   ul {
    display: flex;
    flex-direction: column;
   }

   li {
    font: var(--font1-16-r);
    color: #C8C8C8;
   }

   li + li {
    margin-top: 12px;
   }

   li:hover {
    color: #F7F7F7;
    cursor: pointer;
   }
`

export const Cart = styled.li`
  
  a {
    position: relative;
  }
  
  a::after {
    content: '0';
    font: var(--font2-8-bl);
    height: 20px;
    width: 20px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 54px;
  }
`
