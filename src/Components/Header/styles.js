import styled from "styled-components";

export const HeaderBG = styled.header`
  border-bottom: 1px solid #C8C8C8;
  background: #FFFFFF;
  z-index: 999;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;

    & > a:first-of-type img {
      width: 80px;
    }
  }
`

export const MenuMobile = styled.button`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: initial;
    justify-self: end;
    
    height: 4px;
    width: 40px;
    background: ${props => props.toggleMenuMobile ? '#FFFFFF' : '#000000'};
    transition: all .1s;
    
    &::after {
      content: "";
      display: block;
      width: 40px;
      height: 4px;
      background: #000000;
      transition: all .3s;

      position: absolute;
      top: ${props => props.toggleMenuMobile ? '0px' : '-10px'};
      transform: ${props => props.toggleMenuMobile && 'rotate(45deg)'};
    }

    &::before {
      content: "";
      display: block;
      width: 40px;
      height: 4px;
      background: #000000;
      transition: all .3s;

      position: absolute;
      bottom: ${props => props.toggleMenuMobile ? '0px' : '-10px'};
      transform: ${props => props.toggleMenuMobile && 'rotate(-45deg)'};
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: var(--font1-16-sb);
  width: 60%;

  @media (max-width: 768px) {
    display: ${props => props.toggleMenuMobile ? "flex" : "none"};
    flex-direction: column;
    align-items: start;
    justify-content: start;
    background: #F7F7F7;
    overflow-y: scroll !important;
    
    position: fixed;
    top: 103px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 9999;
    padding-bottom: 200px;
  }
`

export const Account = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;

  a {
    padding: 33px 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr auto; 
    background: #F7F7F7;
  }
`

export const Menus = styled.ul`
  display: flex;

  & > li {
    cursor: pointer;
  }

  & > li > h3 {
    position: relative;
    padding: 40px 20px;
    font: var(--font1-16-sb)
  }

  & > li:hover > h3::before {
    content: "";
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #2B2B2B;
    width: 0px;
    height: 0px;
    
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
  }

  & > li:hover > div {
    display: grid;
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

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    & > li > h3 {
      font: var(--font1-20-b);
      border-bottom: 1px solid #B2B2B2;
    }

    & > li:hover > h3::before {
      display: none;
    }

    & > li:hover::after {
      display: none;
    }
  }
`

export const SubMenus = styled.div`
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

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    text-transform: uppercase;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: start;
    gap: 0px;
    background: #2B2B2B;
    
    position: relative;
    top: 0px;
    left: 0px;
    transform: none;
    
    span {
      padding: 20px;
      border-top: 1px solid #B2B2B2;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    font: var(--font1-16-r);
    color: #C8C8C8;
  }

  li:hover {
    color: #FFA700;
    cursor: pointer;
  }

  a {
    padding: 10px 0;
  }
  
  @media (max-width: 768px) {
    display: ${props => props.toggleSubMenu ? 'flex' : 'none'};
    
    a {
      padding: 14px;
      border-top: 1px solid #414141;
    }
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
    box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, .1);
    background: #FFFFFF;

    position: absolute;
    bottom: -170px;
    left: 0px;
    z-index: 999;
  }
  
  ul::before {
    content: "";
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #FFFFFF;
    width: 0px;
    height: 0px;
    
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%)
  }
  
  &:hover ul {
    display: flex;
  }

  li a {
    padding: 12px;
  }

  li:hover a {
    background: #FFA700;
  }

  @media (max-width: 768px) {
    &:hover ul {
      display: none;
    }

    ul::before {
      display: none;
    }
  }
`

export const Cart = styled.div`
 
  background: #FFA700;
  
  a {
    position: relative;
    display: flex;
    align-content: center;
    height: 100%;
    padding: 0px 20px;

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
    top: 48px;
  }
`

