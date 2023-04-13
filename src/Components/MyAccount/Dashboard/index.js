import React from 'react';
import { Link } from 'react-router-dom';
import { AccountWrapper } from './styles';
import { Container } from './styles';
import { GlobalContext } from '../../Context';

const Dashboard = () => {
  const { loggedUser } = React.useContext(GlobalContext);

  return (
    <Container>
      <AccountWrapper>
        <h1>Seus dados</h1>
        <ul>
          <li>Nome: <span>{loggedUser?.name} {loggedUser?.lastName}</span></li>
          <li>Nascimento: <span>{loggedUser?.birth}</span></li>
          <li>CPF: <span>{loggedUser?.cpf}</span></li>
          <li>Email: <span>{loggedUser?.email}</span></li>
          <li>Telefone: <span>{loggedUser?.phone}</span></li>
        </ul>
        <Link to='dados'>Editar dados</Link>
      </AccountWrapper>

      <AccountWrapper>
        <h1>Endereço Principal</h1>
        {loggedUser?.addresses[0] ? (
          <ul>
            <li>Rua: <span>{loggedUser?.addresses[0]?.address}</span></li>
            <li>Número: <span>{loggedUser?.addresses[0]?.number}</span></li>
            <li>Cidade: <span>{loggedUser?.addresses[0]?.city}</span></li>
            <li>Bairro: <span>{loggedUser?.addresses[0]?.neighborhood}</span></li>
            <li>UF: <span>{loggedUser?.addresses[0]?.uf}</span></li>
            <li>CEP: <span>{loggedUser?.addresses[0]?.cep}</span></li>
          </ul>
        ) : (
          <p>Sem endereços cadastrados</p>
        )}
        <Link to='enderecos'>Ver endereços</Link>
      </AccountWrapper>

      <AccountWrapper>
        <h1>Último pedido</h1>
        {loggedUser?.orders[0] ? (
          <ul>
            <li>Codigo: <span>{loggedUser.orders[0]?.id}</span></li>
            <li>Data: <span>{loggedUser.orders[0]?.date}</span></li>
            <li>Quantidade: <span>{loggedUser.orders[0]?.cart.length}</span></li>
            <li>Valor: <span>R$ {loggedUser.orders[0]?.payment.value.total + loggedUser.orders[0]?.payment.value.shipping},00</span></li>
            <li>Estado do pedido: <span>Aguardando pagamento</span></li>
          </ul>
        ) : (
          <p>Sem pedidos feitos</p>
        )}
        <Link to='pedidos'>Ver pedidos</Link>
      </AccountWrapper>

    </Container>
  )
}

export default Dashboard