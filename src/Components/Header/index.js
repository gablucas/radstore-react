import React from 'react';
import LogoBlack from '../../assets/logo-black.svg';
import LoginIMG from '../../assets/login.svg';
import CartIMG from '../../assets/cart.svg';
import { Container, Nav, Cart, Account, Login, Menus, SubMenus } from './styles';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context';
import useLocalStorage from '../../hooks/useLocalStorage';


const Header = () => {
  const { loggedUser, setLoggedUser, cartQuantity } = React.useContext(GlobalContext);
  const { removeValue } = useLocalStorage();

  function handleLogout() {
    removeValue('loggeduser');
    setLoggedUser(false);
  }

  return (
    <Container>
      <Nav>
        <a href="/"><img src={LogoBlack} alt="" /></a>

        <Menus>
          {/* MARCAS */}
          <li>
            <a href="">Marcas</a>
          </li>

          {/* MASCULINO */}
          <li>
            <a href="">Masculino</a>

            <SubMenus>
              <div>
                <h3>Roupas</h3>
                <ul>
                  <li><Link to='/produtos/roupas/camisas?genre=masculino'>Camisas</Link></li>
                  <li><Link to='/produtos/roupas/camisetas?genre=masculino'>Camisetas</Link></li>
                  <li><Link to='/produtos/roupas/calcas?genre=masculino'>Calças</Link></li>
                  <li><Link to='/produtos/roupas/bermudas?genre=masculino'>Bermudas</Link></li>
                  <li><Link to='/produtos/roupas/boardshorts?genre=masculino'>Boardshorts</Link></li>
                  <li><Link to='/produtos/roupas/moletons?genre=masculino'>Moletons</Link></li>
                  <li><Link to='/produtos/roupas/jaquetas?genre=masculino'>Jaquetas</Link></li>
                </ul>
              </div>

              <div>
                <h3>Calçados</h3>
                <ul>
                  <li><Link to='/produtos/calçados/tenis?genre=masculino'>Tênis</Link></li>
                  <li><Link to='/produtos/calçados/chinelos?genre=masculino'>Chinelos</Link></li>
                  <li><Link to='/produtos/calçados/botas?genre=masculino'>Botas</Link></li>
                </ul>
              </div>

              <div>
                <h3>Acessórios</h3>
                <ul>
                  <li><Link to='/produtos/acessorios/mochilas?genre=masculino'>Mochilas</Link></li>
                  <li><Link to='/produtos/acessorios/bones?genre=masculino'>Bones</Link></li>
                  <li><Link to='/produtos/acessorios/carteiras?genre=masculino'>Carteiras</Link></li>
                  <li><Link to='/produtos/acessorios/cintos?genre=masculino'>Cintos</Link></li>
                  <li><Link to='/produtos/acessorios/toucas?genre=masculino'>Toucas</Link></li>
                  <li><Link to='/produtos/acessorios/meias?genre=masculino'>Meias</Link></li>
                  <li><Link to='/produtos/acessorios/oculos?genre=masculino'>Oculos</Link></li>
                </ul>
              </div>
            </SubMenus>
          </li>
          
          {/* FEMININO */}
          <li>
            <a href="">Feminino</a>
            
            <SubMenus>
              <div>
                <h3>Roupas</h3>
                  <ul>
                    <li><Link to='/produtos/roupas/camisas?genre=feminino'>Camisas</Link></li>
                    <li>Camisetas</li>
                    <li>Vestidos</li>
                    <li>Calças</li>
                    <li>Bermudas</li>
                    <li>Moletons</li>
                    <li>Jaquetas</li>
                    <li>Saias</li>
                  </ul>
                </div>

                <div>
                  <h3>Calçados</h3>
                  <ul>
                    <li>Tênis</li>
                    <li>Chinelo</li>
                    <li>Botas</li>
                  </ul>
                </div>

                <div>
                  <h3>Acessórios</h3>
                  <ul>
                    <li>Mochilas</li>
                    <li>Bonés</li>
                    <li>Carteiras</li>
                    <li>Cintos</li>
                    <li>Toucas</li>
                    <li>Meias</li>
                    <li>Oculos</li>
                  </ul>
              </div>
            </SubMenus>
          </li>

          {/* KIDS */}
          <li>
            <a href="">Kids</a>

            <SubMenus>
              <div>
                <h3>Roupas</h3>
                <ul>
                  <li>Camisas</li>
                  <li>Camisetas</li>
                  <li>Calças</li>
                  <li>Bermudas</li>
                  <li>Moletons</li>
                  <li>Jaquetas</li>
                </ul>
              </div>

              <div>
                <h3>Calçados</h3>
                <ul>
                  <li>Tênis</li>
                  <li>Chinelo</li>
                  <li>Botas</li>
                </ul>
              </div>

              <div>
                <h3>Acessórios</h3>
                <ul>
                  <li>Mochilas</li>
                  <li>Bonés</li>
                  <li>Meias</li>
                </ul>
              </div>
            </SubMenus>
          </li>

          {/* ESPORTES */}
          <li>  
            <a href="">Esportes</a>

            <SubMenus>
              <div>
                <h3>Longboard</h3>
                <ul>
                  <li>Completo</li>
                  <li>Shapes</li>
                  <li>Trucks</li>
                  <li>Rodas</li>
                  <li>Rolamentos</li>
                  <li>Acessórios</li>
                </ul>
              </div>

              <div>
                <h3>Skate</h3>
                <ul>
                  <li>Completo</li>
                  <li>Shapes</li>
                  <li>Trucks</li>
                  <li>Rodas</li>
                  <li>Rolamentos</li>
                  <li>Acessórios</li>
                </ul>
              </div>

              <div>
                <h3>BMX</h3>
                <ul>
                  <li>Completa</li>
                  <li>Quadro</li>
                  <li>Pneus</li>
                  <li>Peças</li>
                  <li>Acessórios</li>
                </ul>
              </div>
            </SubMenus>
          </li>

          <li><a href="">Promoções</a></li>
        </Menus>

        <Account>
          <Login>
            <Link to='/login'><img src={LoginIMG} alt="" /><span>Olá, {loggedUser ? loggedUser.name : 'Visitante'}</span></Link>

            {loggedUser && (<ul>
              <li><Link>Minha conta</Link></li>
              <li><Link>Meus pedidos</Link></li>
              <li><Link>Meus endereços</Link></li>
              <li><button onClick={handleLogout}>Sair</button></li>
            </ul>)}
          </Login>

          <Cart>
            <Link to="/carrinho"><img src={CartIMG} alt="" /><span>{cartQuantity}</span></Link> 
          </Cart>
        </Account>

        
      </Nav>
    </Container>
  )
}

export default Header