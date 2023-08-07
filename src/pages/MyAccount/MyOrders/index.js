import React from 'react';
import { Container, OrderResume } from './styles';
import { GlobalContext } from '../../../components/Context';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const { loggedUser } = React.useContext(GlobalContext);

  return (
    <Container>
      <h1>Meus Pedidos</h1>

      {loggedUser?.orders.map((m) => (
        <OrderResume key={m.id}>
          <div><span>Cód. Pedido</span><span>{m.id}</span></div>
          <div><span>Data</span><span>{m.date}</span></div>
          <div><span>Qt. Itens</span><span>{m.items.map((m) => m.quantity).reduce((acc, cur) => acc + cur, 0)}</span></div>
          <div><span>Valor Total</span><span>R$ {m.payment.subtotal + m.payment.shipping},00</span></div>
          <div><span>Estado do pedido</span><span>Aguardando confirmação do pagamento</span></div>
          <Link to={`/minha-conta/pedido/${m.id}`}>Mais detalhes</Link>
        </OrderResume>
      ))}
    </Container>
  )
}

export default MyOrders