import React from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { GlobalContext } from '../../components/Context';
import Dashboard from './Dashboard';
import MyAddresses from './MyAddresses';
import MyData from './MyData';
import MyFavorites from './MyFavorites';
import MyOrders from './MyOrders';
import Order from './MyOrders/Order';
import MyPayments from './MyPayments';
import { Container, Menu } from './styles';

const MyAccount = () => {
  const { loggedUser, setLoggedUser, setBgColor, setToggleMenuMobile } = React.useContext(GlobalContext);
  const { getValue, removeValue } = useLocalStorage();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!getValue('radstoreLoggedUser')) {
      navigate('/')
    }
  }, [navigate, getValue])

  React.useEffect(() => {
    setToggleMenuMobile('');
  }, [setToggleMenuMobile])

  React.useEffect(() => {
    setBgColor(false);
  }, [setBgColor])

  function handleLogout() {
    removeValue('radstoreLoggedUser');
    setLoggedUser(false);
  }

  return (
    <Container>
      <Menu>
        <span>Olá, {loggedUser?.name}</span>
        <ul>
          <li><NavLink to='resumo'>Minha conta</NavLink></li>
          <li><NavLink to='dados'>Meus dados</NavLink></li>
          <li><NavLink to='enderecos'>Meus endereços</NavLink></li>
          <li><NavLink to='pedidos'>Meus pedidos</NavLink></li>
          <li><NavLink to='favoritos'>Meus favoritos</NavLink></li>
          <li><NavLink to='pagamentos'>Pagamentos</NavLink></li>
          <li><Link to='/' onClick={handleLogout}>Sair</Link></li>
        </ul>
      </Menu>

      <Routes>
        <Route path='/resumo' element={<Dashboard />} />
        <Route path='/dados' element={<MyData />} />
        <Route path='/enderecos' element={<MyAddresses />} />
        <Route path='/pedidos' element={<MyOrders />} />
        <Route path='/pedido/:id' element={<Order />} />
        <Route path='/favoritos' element={<MyFavorites />} />
        <Route path='/pagamentos' element={<MyPayments />} />
      </Routes>

    </Container>
  )
}

export default MyAccount