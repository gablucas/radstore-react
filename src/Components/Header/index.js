import React from 'react';
import { Container, Links } from './styles';
import Logo from '../../Assets/Logo.svg';

const Header = () => {
  return (
    <Container>
      <Links>
        <a href="/"><img src={Logo} alt="" /></a>

        <ul>
          <li><a href="">Marcas</a></li>
          <li><a href="">Roupas</a></li>
          <li><a href="">Calçados</a></li>
          <li><a href="">Acessórios</a></li>
          <li><a href="">Esportes</a></li>
          <li><a href="">Promoções`</a></li>
        </ul>

        <div>
          <a href="">Entrar</a>
          <a href="">Carrinho</a>
        </div>
        
      </Links>
    </Container>
  )
}

export default Header