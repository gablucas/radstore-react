import React from 'react';
import LogoBlack from '../../assets/logo-black.svg';
import LoginIMG from '../../assets/login.svg';
import CartIMG from '../../assets/cart.svg';
import { Container, Nav, Menu, SubMenu, Cart, Account } from './styles';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <Container>
      <Nav>
        <a href="/"><img src={LogoBlack} alt="" /></a>

        <ul>
          <Menu>
            <a href="">Marcas</a>
          </Menu>

          {/* MASCULINO */}
          <Menu>
            <a href="">Masculino</a>

            <div>
              <SubMenu>
                <h3>Roupas</h3>
                <ul>
                  <li><Link to='/produtos/roupas/camisas?genre=masculino'>Camisas</Link></li>
                  <li><Link to='/produtos/roupas/camisetas?genre=masculino'>Camisetas</Link></li>
                  <li>Calças</li>
                  <li>Bermudas</li>
                  <li>Boardshorts</li>
                  <li>Moletons</li>
                  <li>Jaquetas</li>
                </ul>
              </SubMenu>

              <SubMenu>
                <h3>Calçados</h3>
                <ul>
                  <li>Tênis</li>
                  <li>Chinelo</li>
                  <li>Botas</li>
                </ul>
              </SubMenu>

              <SubMenu>
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
              </SubMenu>
            </div>

          </Menu>
          
          {/* FEMININO */}
          <Menu>
            <a href="">Feminino</a>
            
            <div>
            <SubMenu>
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
              </SubMenu>

              <SubMenu>
                <h3>Calçados</h3>
                <ul>
                  <li>Tênis</li>
                  <li>Chinelo</li>
                  <li>Botas</li>
                </ul>
              </SubMenu>

              <SubMenu>
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
              </SubMenu>
            </div>
          </Menu>

          {/* KIDS */}
          <Menu>
            <a href="">Kids</a>
            <div>
            <SubMenu>
                <h3>Roupas</h3>
                <ul>
                  <li>Camisas</li>
                  <li>Camisetas</li>
                  <li>Calças</li>
                  <li>Bermudas</li>
                  <li>Moletons</li>
                  <li>Jaquetas</li>
                </ul>
              </SubMenu>

              <SubMenu>
                <h3>Calçados</h3>
                <ul>
                  <li>Tênis</li>
                  <li>Chinelo</li>
                  <li>Botas</li>
                </ul>
              </SubMenu>

              <SubMenu>
                <h3>Acessórios</h3>
                <ul>
                  <li>Mochilas</li>
                  <li>Bonés</li>
                  <li>Meias</li>
                </ul>
              </SubMenu>
            </div>
          </Menu>

          {/* ESPORTES */}
          <Menu>
            <a href="">Esportes</a>

            <div>
              <SubMenu>
                <h3>Longboard</h3>
                <ul>
                  <li>Completo</li>
                  <li>Shapes</li>
                  <li>Trucks</li>
                  <li>Rodas</li>
                  <li>Rolamentos</li>
                  <li>Acessórios</li>
                </ul>
              </SubMenu>

              <SubMenu>
                <h3>Skate</h3>
                <ul>
                  <li>Completo</li>
                  <li>Shapes</li>
                  <li>Trucks</li>
                  <li>Rodas</li>
                  <li>Rolamentos</li>
                  <li>Acessórios</li>
                </ul>
              </SubMenu>

              <SubMenu>
                <h3>BMX</h3>
                <ul>
                  <li>Completa</li>
                  <li>Quadro</li>
                  <li>Pneus</li>
                  <li>Peças</li>
                  <li>Acessórios</li>
                </ul>
              </SubMenu>
            </div>
          </Menu>

          <li><a href="">Promoções</a></li>
        </ul>

        <Account>
          <li><a href=""><img src={LoginIMG} alt="" /></a></li>
          <Cart><a href=""><img src={CartIMG} alt="" /></a></Cart>
        </Account>
        
      </Nav>
    </Container>
  )
}

export default Header