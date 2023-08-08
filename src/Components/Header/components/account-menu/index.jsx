import React from 'react';
import { Link } from "react-router-dom"
import { Account, Cart, Login } from "../../styles"
import { GlobalContext } from "../../../Context";
import useLocalStorage from '../../../../hooks/useLocalStorage';
import LoginIMG from '../../../../assets/login.svg';
import CartIMG from '../../../../assets/cart.svg';

const AccountMenu = () => {
  const { loggedUser, setLoggedUser, cart } = React.useContext(GlobalContext);
  const { removeValue } = useLocalStorage();

  function handleLogout() {
    removeValue('radstoreLoggedUser');
    setLoggedUser(false);
  }

  return (
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
  )
}

export default AccountMenu;