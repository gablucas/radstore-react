import React from 'react'
import { ButtonsWrapper, Container, InfoWrapper, Products } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../Helper/Image';
import useLocalStorage from '../../../hooks/useLocalStorage';

const CartOrder = ({ productsDetails }) => {
  const { getValue, setValue } = useLocalStorage();
  const navigate = useNavigate();
  const checkout = JSON.parse(getValue('radstoreCheckout'));
  setValue('radstoreCheckout', JSON.stringify({}))


  if (!checkout) return navigate('/');
  return (
    <Container>
      <h1>Pedido efetuado com sucesso</h1>

      <ButtonsWrapper>
        <Link to='/'>Continuar compra</Link>
        <Link to='/minha-conta/pedidos'>Ver meus pedidos</Link>
      </ButtonsWrapper>

      <InfoWrapper>
        <h2>Pagamento</h2>
        <ul>
          <li>Forma de pagamento: <span>{checkout.payment.type}{checkout.payment.type === 'Cartão' && ` - ${checkout.payment.installments}x de R$ ${Math.round((checkout.payment.subtotal + checkout.payment.shipping) / checkout.payment.installments)},00`}</span></li>
          <li>Subtotal: <span>R$ {checkout.payment.subtotal},00</span></li>
          <li>Frete: <span>R$ {checkout.payment.shipping},00</span></li>
          <li>Total: <span>R$ {checkout.payment.subtotal + checkout.payment.shipping},00</span></li>
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

        {checkout.items.map((m, i) => (
          <Products key={m.id}>
            <div>
              <Image url={productsDetails[i]?.image} width='100px' />
              <div>
                <span>Produto</span>
                <span>{productsDetails[i]?.name}</span>
              </div>
            </div>

            <div><span>Preço</span><span>R$ {productsDetails[i]?.price}</span></div>
            <div><span>Tamanho</span><span>{m.measure}</span></div>
            <div><span>Cor</span><span>{productsDetails[i]?.color[0]}</span></div>
            <div><span>Quantidade</span><span>{m.quantity}</span></div>

          </Products>
        ))}
      </InfoWrapper>


      </Container>
  )
}

export default CartOrder