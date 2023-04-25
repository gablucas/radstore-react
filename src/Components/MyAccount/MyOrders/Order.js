import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context';
import { Container, OrderInfo, OrderProduct, OrderProducts } from './styles';

const Order = () => {
  const { loggedUser, products } = React.useContext(GlobalContext);
  const [order, setOrder] = React.useState();
  const { id } = useParams();
  
  React.useEffect(() => {
    if (loggedUser) {
      setOrder(loggedUser.orders.find((f) => f.id === parseInt(id)))
    }
  }, [id, loggedUser])
  

  if (order && products)
  return (
    <Container>
      <h1>Pedido {id}</h1>

      <OrderInfo>
        <div>
          <span>Valor da compra: R$ {order.payment.subtotal},00</span>
          <span>Valor do frete: R$ {order.payment.shipping},00</span>
          <span>Total: R$ {order.payment.subtotal + order.payment.shipping},00</span>
        </div>
        <div>
          <span>Data do pagamento: {order.date}</span>
          <span>Modo de pagamento: {order.payment.type}</span>
          <span>Status pedido: Aguardando pagamento</span>
        </div>
        <span>Quantidade de itens: {order.items.map((m) => m.quantity).reduce((acc, cur) => acc + cur, 0)}</span>
      </OrderInfo>

      <OrderProducts>

        <div>
          <span>Produto</span>
          <span>Preço</span>
          <span>Tamanho</span>
          <span>Cor</span>
          <span>Quantidade</span>
          <span>Total</span>
        </div>

        {products.length && order.items.map((m) => (
          <OrderProduct key={m.id + m.measure}>
            <div>
              <img src={products.find((f) => f.id === m.id).image} alt="" width="100" />
              <span>{products.find((f) => f.id === m.id).name}</span>
            </div>

            <span>R$ {products.find((f) => f.id === m.id).price}</span>
            <span>{m.measure}</span>
            <span>{products.find((f) => f.id === m.id).color[0]}</span>
            <span>{m.quantity}</span>
            <span>R$ {parseInt(products.find((f) => f.id === m.id).price) * m.quantity},00</span>
          </OrderProduct>))}
      </OrderProducts>

      <Link to='/minha-conta/pedidos' >Voltar</Link>
    </Container>
  )
}

export default Order