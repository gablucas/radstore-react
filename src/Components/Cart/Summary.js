import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalContext } from '../Context';

const Container = styled.div`
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
  const { cart } = React.useContext(GlobalContext);
  const [subTotal, setSubtTotal] = React.useState();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if(cart) {
      setSubtTotal(cart.reduce((acc, cur) => acc + cur.quantity * parseInt(cur.data.price), 0))
    }
  }, [cart])
  
  
  function handleBuy() {
    if (!selectedPage) {
      backStep.current.entrega = true;
      navigate('entrega');
    } else if (selectedPage === 'entrega') {
      backStep.current.pagamento = true;
      navigate('pagamento');
    }
  } 

  return (
    <Container>
      <div><span>Subtotal</span> <span>R$ {subTotal || 0},00</span></div>
      <div><span>Frete</span> <span>R$ 0,00</span></div>
      <div><span>Cupom</span> <span>R$ 0,00</span></div>
      <div><span>Total</span> <span>R$ {subTotal || 0},00</span></div>

      <button onClick={handleBuy}>{!selectedPage || selectedPage === 'entrega' ? 'Continuar compra' : 'Finalizar compra'}</button>
    </Container>
  )
}

export default Summary