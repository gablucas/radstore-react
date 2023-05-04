import React from 'react';
import { Container, ListTitle, OrderResume } from './styles';
import { GlobalContext } from '../../Context';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const { loggedUser } = React.useContext(GlobalContext);

  return (
    <Container>
      <h1>Meus Pedidos</h1>

      <ListTitle>
        <span>Cód. Pedido</span>
        <span>Data da compra</span>
        <span>Qt. Itens</span>
        <span>Valor Total</span>
        <span>Estado do pedido</span>
      </ListTitle>

      {loggedUser?.orders.map((m) => (
        <OrderResume key={m.id}>
          <span>{m.id}</span>
          <span>{m.date}</span>
          <span>{m.items.map((m) => m.quantity).reduce((acc, cur) => acc + cur, 0)}</span>
          <span>R$ {m.payment.subtotal + m.payment.shipping},00</span>
          <span>Aguardando confirmação do pagamento</span>
          <Link to={`/minha-conta/pedido/${m.id}`}>Mais detalhes</Link>
        </OrderResume>
      ))}
    </Container>
  )
}

export default MyOrders