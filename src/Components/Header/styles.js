import styled from "styled-components";

export const Container = styled.header`
  margin-left: 40px;
  margin-right: 40px;
  border-bottom: 1px solid #C8C8C8;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: var(--font1-16-sb);


  ul, div {
    display: flex;
  }

  & > ul > li > a {
    padding: 40px 20px;
  }
`

export const Menus = styled.ul`

  & > li > div {
    display: none;
    grid-template-columns: repeat(3, 120px);
    justify-content: center;
    gap: 100px;

    position: absolute;
    top: 160px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    color: #FFFFFF;
  }

  & > li h3 {
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  & > li:hover {
    color: rgba(0, 0, 0, .6);
  }

  & > li:hover::after {
    content: '';
    display: block;
    background: #2B2B2B;

    position: absolute;
    top: 130px;
    left: 0px;
    height: 400px;
    width: 100%;
    z-index: 999;
  }

  & > li:hover > div {
    display: grid;
  }
`

export const SubMenus = styled.div`

  div {
    display: flex;
    flex-direction: column;
  }

   div ul {
    display: flex;
    flex-direction: column;
   }

   div li {
    font: var(--font1-16-r);
    color: #C8C8C8;
   }

   div li + li {
    margin-top: 12px;
   }

   div li:hover {
    color: #F7F7F7;
    cursor: pointer;
   }
`

export const Account = styled.div`

  div > a {
    padding: 33px 20px !important;
  }
`

export const Login = styled.div`
  position: relative;

  & > a {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  ul {
    display: none;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;

    position: absolute;
    bottom: -132px;
    left: 0px;
    z-index: 999;
  }

  &:hover ul {
    display: flex;
  }

  li a {
    padding: 10px;
  }
`

export const Cart = styled.div`

  background: #FFA700;
  
  a {
    position: relative;
  }
  
  span {
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

