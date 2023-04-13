import React from 'react'
import { useQuery } from 'react-query';
import { api } from '../../../services/api';
import { ButtonsWrapper, Container, InfoWrapper, Products } from './styles';
import { GlobalContext } from '../../Context';
import { useNavigate } from 'react-router-dom';

const CartOrder = () => {
  const { order } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  const { data } = useQuery('products', async () => {
    const { data } = await api.get('data.json');

    return data;
  })

  function handleNavigate(navigateTo) {
    if (navigateTo === 'continuar-compra') {
      navigate('/');
    } else if (navigateTo === 'ver-pedidos') {
      navigate('/');
    }

    order.current = {};
  }

  React.useEffect(() => {
    if (!order.current.cart) {
      navigate('/');
    }
  }, [order, navigate])


  return (
    <Container>
      <h1>Pedido efetuado com sucesso</h1>

      <ButtonsWrapper>
        <button onClick={() => handleNavigate('continuar-compra')}>Continuar compra</button>
        <button onClick={() => handleNavigate('ver-pedidos')}>Ver meus pedidos</button>
      </ButtonsWrapper>

      <InfoWrapper>
        <h2>Pagamento</h2>
        <ul>
          <li>Forma de pagamento: <span>Boleto</span></li>
          <li>Subtotal: <span>R$ 3000,00</span></li>
          <li>Frete: <span>R$ 30,00</span></li>
          <li>Total: <span>R$ 3030,00</span></li>
        </ul>
      </InfoWrapper>

      <InfoWrapper>
        <h2>Endereço</h2>
        <ul>
          <li>Destinatário: <span>Gabriel Lucas Pegoretti</span></li>
          <li>Endereço: <span>Rua Henrique Kretz, 265 - Blumenau, Badenfurt - SC - 89070-450</span></li>
        </ul>
      </InfoWrapper>

      <InfoWrapper>
        <h2>Produtos</h2>

        <div>
          <span>Produto</span>
          <span>Preço</span>
          <span>Tamanho</span>
          <span>Cor</span>
          <span>Quantidade</span>
        </div>

        {order.current.cart?.map((m) => (
          <Products key={m.id}>
            <div>
              <img src={data.find((f) => f.id === m.id).image} alt="" width='100px'/>
              <span>{data.find((f) => f.id === m.id).name}</span>
            </div>

            <span>R$ {data.find((f) => f.id === m.id).price}</span>
            <span>{m.measure}</span>
            <span>{data.find((f) => f.id === m.id).color[0]}</span>
            <span>{m.quantity}</span>

          </Products>
        ))}
      </InfoWrapper>


      </Container>
  )
}

export default CartOrder