import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useLocalStorage from '../../hooks/useLocalStorage';
import { GlobalContext } from '../Context';

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px;
  font: var(--font1-18-m);
  letter-spacing: 1px;
  color: #F7F7F7;
  background-color: #2B2B2B;

  div {
    display: flex;
    justify-content: space-between;
  }

  div:last-of-type {
    font: var(--font1-24-sb);
    color: #FFFFFF;
    margin-top: 30px;

    position: relative;
  }

  div:last-of-type::before {
    content: '';
    width: 100%;
    height: 1px;
    background: #C8C8C8;

    position: absolute;
    top: -20px;

  }

  button {
    margin-top: 30px;
    padding: 16px 0px;
    font: var(--font1-16-b);
    text-transform: uppercase;
    color: #2B2B2B;
    background-color: #FFA700;
    transition: filter .3s;
  }

  button:hover {
    filter: brightness(1.2);
  }
`

const Summary = ({ backStep, selectedPage }) => {
  const { selectedCard, loggedUser, checkout, cart } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();

  const navigate = useNavigate();
  
  function handleBuy() {
    if (!selectedPage) {
      backStep.current.entrega = true;
      navigate('entrega');
    } else if (selectedPage === 'entrega' && checkout.address) {
      backStep.current.pagamento = true;
      navigate('pagamento');
    } else if ((selectedPage === 'pagamento' && checkout.payment.type !== 'cartao') || (selectedPage === 'pagamento' && checkout.payment.type === 'cartao' && selectedCard)) {
      const orderDate = new Date();
      const user = loggedUser;
      user.orders.unshift({...checkout, id: Object.keys(user.orders).length + 1, date:`${orderDate.getDate()}/${orderDate.getMonth()}/${orderDate.getFullYear()}`, items: cart});

      const users = JSON.parse(getValue('users')).map((m) => {
        if (m.email === user.email) {
          return user;
        }
        return m;
      })
      
      setValue('users', JSON.stringify(users));
      setValue('loggeduser', JSON.stringify(user));
      setValue('cart', JSON.stringify([]));
      backStep.current.entrega = false;
      backStep.current.pagamento = false;
      navigate('pedido-realizado');
    }
  } 

  return (
    <Container>
      <div><span>Subtotal</span> <span>R$ {checkout.payment.subtotal},00</span></div>
      <div><span>Frete</span> <span>R$ {checkout.payment.shipping},00</span></div>
      <div><span>Total</span> <span>R$ {checkout.payment.subtotal + checkout.payment.shipping},00</span></div>

      <button onClick={handleBuy}>{!selectedPage || selectedPage === 'entrega' ? 'Continuar compra' : 'Finalizar compra'}</button>
    </Container>
  )
}

export default Summary