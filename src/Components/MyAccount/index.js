import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { GlobalContext } from '../Context';
import Dashboard from './Dashboard';
import MyData from './MyData';
import { Container, Menu } from './styles';

const MyAccount = () => {
  const { loggedUser, setBgColor } = React.useContext(GlobalContext);
  const { getValue } = useLocalStorage();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!getValue('loggeduser')) {
      navigate('/')
    }
  }, [navigate, getValue])

  React.useEffect(() => {
    setBgColor(false);
  }, [setBgColor])

  return (
    <Container>
      <Menu>
        <span>Olá, {loggedUser?.name}</span>
        <ul>
          <li><Link to=''>Minha conta</Link></li>
          <li><Link to='dados'>Meus dados</Link></li>
          <li><Link to='enderecos'>Meus endereços</Link></li>
          <li><Link to='pedidos'>Meus pedidos</Link></li>
          <li><Link to='favoritos'>Meus favoritos</Link></li>
          <li><Link to='pagamentos'>Pagamentos</Link></li>
          <li>Sair</li>
        </ul>
      </Menu>

      <Routes>
        <Route path='' element={<Dashboard />} />
        <Route path='/dados' element={<MyData />} />
      </Routes>

    </Container>
  )
}

export default MyAccount