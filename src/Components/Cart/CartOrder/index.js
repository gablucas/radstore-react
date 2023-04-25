import React from 'react'
import { ButtonsWrapper, Container, InfoWrapper, Products } from './styles';
import { GlobalContext } from '../../Context';
import { Link, useNavigate } from 'react-router-dom';

const CartOrder = ({ productsDetails }) => {
  const { checkout } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!productsDetails.length) {
      navigate('/');
    }
  }, [productsDetails.length, navigate])


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
          <li>Forma de pagamento: <span>{checkout.payment.type}{checkout.payment.type === 'cartao' && ` - ${checkout.payment.installments}x de R$ ${(checkout.payment.total + checkout.payment.shipping) / checkout.payment.installments}`}</span></li>
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

        <div>
          <span>Produto</span>
          <span>Preço</span>
          <span>Tamanho</span>
          <span>Cor</span>
          <span>Quantidade</span>
        </div>

        {checkout.items.map((m, i) => (
          <Products key={m.id}>
            <div>
              <img src={productsDetails[i].data.image} alt="" width='100px'/>
              <span>{productsDetails[i].data.name}</span>
            </div>

            <span>R$ {productsDetails[i].data.price}</span>
            <span>{m.measure}</span>
            <span>{productsDetails[i].data.color[0]}</span>
            <span>{m.quantity}</span>

          </Products>
        ))}
      </InfoWrapper>


      </Container>
  )
}

export default CartOrder