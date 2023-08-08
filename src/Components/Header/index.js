import React from 'react';
import LogoBlack from '../../assets/logo-black.svg';

import { Container, Nav, Menus, HeaderBG, MenuMobile } from './styles';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context';
import MensMenu from './components/mens-menu';
import WomansMenu from './components/womans-menu';
import SportsMenu from './components/sports-menu';
import AccountMenu from './components/account-menu';

const Header = () => {
  const { toggleMenuMobile, setToggleMenuMobile } = React.useContext(GlobalContext);
  const [toggleSubMenu, setToggleSubMenu] = React.useState('');


  function handleToggleSubMenu(subMenu) {
    if (subMenu === toggleSubMenu) {
      setToggleSubMenu('');
    } else {
      setToggleSubMenu(subMenu);
    }
  }

  React.useEffect(() => {
    if (toggleMenuMobile) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  }, [toggleMenuMobile])

  return (
    <HeaderBG>
      <Container>
        <Link to='/'><img src={LogoBlack} alt="" /></Link>
        <MenuMobile onClick={() => setToggleMenuMobile(!toggleMenuMobile)} toggleMenuMobile={toggleMenuMobile}></MenuMobile>

        <Nav toggleMenuMobile={toggleMenuMobile}>
          <Menus>
            <MensMenu toggleSubMenu={toggleSubMenu} handleToggleSubMenu={handleToggleSubMenu} />
            <WomansMenu toggleSubMenu={toggleSubMenu} handleToggleSubMenu={handleToggleSubMenu} />
            <SportsMenu toggleSubMenu={toggleSubMenu} handleToggleSubMenu={handleToggleSubMenu} />
          </Menus>
          
          <AccountMenu />
        </Nav>
      </Container>
    </HeaderBG>
  )
}

export default Header