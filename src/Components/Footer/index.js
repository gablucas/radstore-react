import React from 'react';
import { Container, Links, SocialMedia } from './styles';
import LogoWhite from '../../assets/logo-white.svg';
import { ReactComponent as WhatsappIMG } from '../../assets/social/whatsapp.svg';
import { ReactComponent as InstagramIMG } from '../../assets/social/instagram.svg';
import { ReactComponent as FacebookIMG } from '../../assets/social/facebook.svg';
import { GlobalContext } from '../Context';

const Footer = () => {
  const [email,  setEmail] = React.useState('');
  const { isLoginPage } = React.useContext(GlobalContext);
  

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setEmail(e.target.value)
  }

  return (
    <Container email={email} isLoginPage={isLoginPage}>
      <img src={LogoWhite} alt="" width='140' />

      <Links>
        <h3>Categorias</h3>
        <ul>
          <li>Marcas</li>
          <li>Roupas</li>
          <li>Calçados</li>
          <li>Acessórios</li>
          <li>Esportes</li>
          <li>Promoções</li>
        </ul>
      </Links>

      <Links>
        <h3>Conta</h3>
        <ul>
          <li>Minha Conta</li>
          <li>Meus dados</li>
          <li>Pedidos</li>
          <li>Favoritos</li>
        </ul>
      </Links>

      <Links>
        <h3>Suporte</h3>
        <ul>
          <li>Troca Online</li>
          <li>Política de trocas e devoluções</li>
          <li>Política de compra</li>
          <li>Política de privacidade</li>
          <li>Fale conosco</li>
          <li>FAQ</li>
        </ul>
      </Links>

    
      <div>
        <h3>Receba nossas novidades</h3>
        <p>Cadastre-se e receba nossas novidades!</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Digite seu email' value={email} onChange={handleChange}/>
          <button>Enviar</button>
        </form>

        <SocialMedia>
          <ul>
            <li><a href='/'><WhatsappIMG /></a></li>
            <li><a href='/'><InstagramIMG /></a></li>
            <li><a href='/'><FacebookIMG /></a></li>
          </ul>
        </SocialMedia>
      </div>

      <p>Atendimento de segunda a sexta-feira das 9h às 18h pelo Telefone: (00) 0000-0000, WhatsApp: (00) 00000-0000 e e-mail: sac@radstore.com.br<br/>
         Rua Spitfire, 777 – CEP: 00000-000 – Radicalandia/Rad Co LTDA – CNPJ: 00.000.000/0000-00<br/>
         Copyright © 2023 Rad Store. Todos os direitos reservados</p>
    </Container>
  )
}

export default Footer