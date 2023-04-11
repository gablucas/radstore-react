import React, { useRef } from 'react';
import { BuySteps, Container } from './styles';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import CartProducts from './CartProducts';
import CartShipping from './CartShipping';
import Summary from './Summary';
import useLogged from '../../hooks/useLogged';
import CartPayment from './CartPayment';
import { GlobalContext } from '../Context';

const Cart = () => {
  const { cart, setShipping, setTotal } = React.useContext(GlobalContext);
  const selectedPage = useParams()["*"];
  const backStep = useRef({entrega: false, pagamento: false});
  const navigate = useNavigate();
  useLogged();

  React.useEffect(() => {
    if((selectedPage === 'entrega' && !backStep.current.entrega) || (selectedPage === 'pagamento' && !backStep.current.pagamento)) {
      navigate('/carrinho')
    }
  }, [navigate, selectedPage])

  React.useEffect(() => {
    if(cart) {
      setTotal(cart.reduce((acc, cur) => acc + cur.quantity * parseInt(cur.data.price), 0));
    }
  }, [cart, setTotal])
  

  React.useEffect(() => {
    if (selectedPage === 'entrega') {
      setShipping(30);
    }
  }, [selectedPage, setShipping])

  return (
    <Container >
      <BuySteps selectedPage={selectedPage} >
        <Link to='' >Carrinho</Link>
        <Link to={(backStep.current.entrega || backStep.current.pagamento) && 'entrega'} >Entrega</Link>
        <Link to={backStep.current.pagamento && 'pagamento'} >Pagamento</Link>
      </BuySteps>
      
      <Routes>
        <Route path='/' element={<CartProducts />} />
        <Route path='entrega' element={<CartShipping />} />
        <Route path='pagamento' element={<CartPayment />} />
      </Routes>

      <Summary backStep={backStep} selectedPage={selectedPage} />

    </Container>
  )
}

export default Cart