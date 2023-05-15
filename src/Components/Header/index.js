import React from 'react';
import LogoBlack from '../../assets/logo-black.svg';
import LoginIMG from '../../assets/login.svg';
import CartIMG from '../../assets/cart.svg';
import { Container, Nav, Cart, Account, Login, Menus, SubMenus, HeaderBG, MenuMobile, Links } from './styles';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context';
import useLocalStorage from '../../hooks/useLocalStorage';

const Header = () => {
  const { cart, loggedUser, setLoggedUser, toggleMenuMobile, setToggleMenuMobile } = React.useContext(GlobalContext);
  const { removeValue } = useLocalStorage();
  const [toggleSubMenu, setToggleSubMenu] = React.useState('');

  function handleLogout() {
    removeValue('loggeduser');
    setLoggedUser(false);
  }


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
          <a href="/"><img src={LogoBlack} alt="" /></a>
          <MenuMobile onClick={() => setToggleMenuMobile(!toggleMenuMobile)} toggleMenuMobile={toggleMenuMobile}></MenuMobile>

        <Nav toggleMenuMobile={toggleMenuMobile}>
          <Menus>
            {/* MASCULINO */}
            <li>
              <h3>Masculino</h3>

              <SubMenus>
                <div>
                  <span onClick={() => handleToggleSubMenu('masculino-roupas')}>Roupas</span>

                  <Links toggleSubMenu={toggleSubMenu === 'masculino-roupas'}>
                    <li><Link to='/produtos/roupas/camisas?genre=masculino'>Camisas</Link></li>
                    <li><Link to='/produtos/roupas/camisetas?genre=masculino'>Camisetas</Link></li>
                    <li><Link to='/produtos/roupas/calcas?genre=masculino'>Calças</Link></li>
                    <li><Link to='/produtos/roupas/bermudas?genre=masculino'>Bermudas</Link></li>
                    <li><Link to='/produtos/roupas/moletons?genre=masculino'>Moletons</Link></li>
                    <li><Link to='/produtos/roupas/jaquetas?genre=masculino'>Jaquetas</Link></li>
                  </Links>
                </div>

                <div>
                <span onClick={() => handleToggleSubMenu('masculino-calcados')}>Calçados</span>

                  <Links toggleSubMenu={toggleSubMenu === 'masculino-calcados'}>
                    <li><Link to='/produtos/calçados/tenis?genre=masculino'>Tênis</Link></li>
                    <li><Link to='/produtos/calçados/chinelos?genre=masculino'>Chinelos</Link></li>
                    <li><Link to='/produtos/calçados/botas?genre=masculino'>Botas</Link></li>
                  </Links>
                </div>

                <div>
                <span onClick={() => handleToggleSubMenu('masculino-acessorios')}>Acessórios</span>
                  
                  <Links toggleSubMenu={toggleSubMenu === 'masculino-acessorios'}>
                    <li><Link to='/produtos/acessorios/mochilas?genre=masculino'>Mochilas</Link></li>
                    <li><Link to='/produtos/acessorios/bones?genre=masculino'>Bones</Link></li>
                    <li><Link to='/produtos/acessorios/carteiras?genre=masculino'>Carteiras</Link></li>
                    <li><Link to='/produtos/acessorios/cintos?genre=masculino'>Cintos</Link></li>
                    <li><Link to='/produtos/acessorios/toucas?genre=masculino'>Toucas</Link></li>
                    <li><Link to='/produtos/acessorios/meias?genre=masculino'>Meias</Link></li>
                    <li><Link to='/produtos/acessorios/oculos?genre=masculino'>Oculos</Link></li>
                  </Links>
                </div>
              </SubMenus>
            </li>
            
            {/* FEMININO */}
            <li>
              <h3>Feminino</h3>
              
              <SubMenus>
                <div>
                  <span onClick={() => handleToggleSubMenu('feminino-roupas')}>Roupas</span>
                    
                    <Links toggleSubMenu={toggleSubMenu === 'feminino-roupas'}>
                      <li><Link to='/produtos/roupas/camisas?genre=feminino'>Camisas</Link></li>
                      <li><Link to='/produtos/roupas/camisetas?genre=feminino'>Camisetas</Link></li>
                      <li><Link to='/produtos/roupas/calcas?genre=feminino'>Calças</Link></li>
                      <li><Link to='/produtos/roupas/shorts?genre=feminino'>Shorts</Link></li>
                      <li><Link to='/produtos/roupas/moletons?genre=feminino'>Moletons</Link></li>
                      <li><Link to='/produtos/roupas/jaquetas?genre=feminino'>Jaquetas</Link></li>
                    </Links>
                  </div>

                  <div>
                  <span onClick={() => handleToggleSubMenu('feminino-calcados')}>Calçados</span>
                    
                    <Links toggleSubMenu={toggleSubMenu === 'feminino-calcados'}>
                      <li><Link to='/produtos/calcados/tenis?genre=feminino'>Tênis</Link></li>
                      <li><Link to='/produtos/calcados/chinelo?genre=feminino'>Chinelos</Link></li>
                      <li><Link to='/produtos/calcados/botas?genre=feminino'>Botas</Link></li>
                    </Links>
                  </div>

                  <div>
                  <span onClick={() => handleToggleSubMenu('feminino-acessorios')}>Acessórios</span>
                    
                    <Links toggleSubMenu={toggleSubMenu === 'feminino-acessorios'}>
                      <li><Link to='/produtos/acessorios/mochilas?genre=feminino'>Mochilas</Link></li>
                      <li><Link to='/produtos/acessorios/bones?genre=feminino'>Bonés</Link></li>
                      <li><Link to='/produtos/acessorios/carteiras?genre=feminino'>Carteiras</Link></li>
                      <li><Link to='/produtos/acessorios/cintos?genre=feminino'>Cintos</Link></li>
                      <li><Link to='/produtos/acessorios/toucas?genre=feminino'>Toucas</Link></li>
                      <li><Link to='/produtos/acessorios/meias?genre=feminino'>Meias</Link></li>
                      <li><Link to='/produtos/acessorios/oculos?genre=feminino'>Oculos</Link></li>
                    </Links>
                </div>
              </SubMenus>
            </li>

            {/* ESPORTES */}
            <li>  
              <h3>Esportes</h3>

              <SubMenus>
                <div>
                  <span onClick={() => handleToggleSubMenu('longboard')}>Longboard</span>
                  
                  <Links toggleSubMenu={toggleSubMenu === 'longboard'}>
                    <li><Link to='/produtos/longboard/completo?genre=longboard'>Completo</Link></li>
                    <li><Link to='/produtos/longboard/shapes'>Shapes</Link></li>
                    <li><Link to='/produtos/longboard/trucks'>Trucks</Link></li>
                    <li><Link to='/produtos/longboard/rodas'>Rodas</Link></li>
                    <li><Link to='/produtos/longboard/rolamentos'>Rolamentos</Link></li>
                    <li><Link to='/produtos/longboard/acessorios'>Acessórios</Link></li>
                  </Links>
                </div>

                <div>
                  <span onClick={() => handleToggleSubMenu('skate')}>Skate</span>
                  
                  <Links toggleSubMenu={toggleSubMenu === 'skate'}>
                    <li><Link to='/produtos/skate/completo'>Completo</Link></li>
                    <li><Link to='/produtos/skate/shapes'>Shapes</Link></li>
                    <li><Link to='/produtos/skate/trucks'>Trucks</Link></li>
                    <li><Link to='/produtos/skate/rodas'>Rodas</Link></li>
                    <li><Link to='/produtos/skate/rolamentos'>Rolamentos</Link></li>
                    <li><Link to='/produtos/skate/acessorios'>Acessórios</Link></li>
                  </Links>
                </div>
              </SubMenus>
            </li>
          </Menus>

          <Account>
            <Login>
              <Link to={loggedUser ? '/minha-conta/resumo' : '/login'}><img src={LoginIMG} alt="" /><span>{loggedUser ? loggedUser.name.split(' ')[0] : `Entrar/Criar`}</span></Link>

              {loggedUser && (<ul>
                <li><Link to='/minha-conta/resumo'>Minha conta</Link></li>
                <li><Link to='/minha-conta/pedidos'>Meus pedidos</Link></li>
                <li><Link to='/minha-conta/enderecos'>Meus endereços</Link></li>
                <li><Link to='/' onClick={handleLogout}>Sair</Link></li>
              </ul>)}
            </Login>

            <Cart>
              <Link to="/carrinho"><img src={CartIMG} alt="" /><span>{cart?.map((m) => m.quantity).reduce((acc, cur) => acc + cur, 0) || 0}</span></Link> 
            </Cart>
          </Account>
        </Nav>
      </Container>
    </HeaderBG>
  )
}

export default Header