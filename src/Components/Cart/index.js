import React, { useRef } from 'react';
import { BuySteps, Container } from './styles';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import CartProducts from './CartProducts';
import CartShipping from './CartShipping';
import Summary from './Summary';
import CartPayment from './CartPayment';
import { GlobalContext } from '../Context';
import CartOrder from './CartOrder';

const Cart = () => {
  const { cart, setShipping, setTotal } = React.useContext(GlobalContext);
  const selectedPage = useParams()["*"];
  const backStep = useRef({entrega: false, pagamento: false});
  const navigate = useNavigate();


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
    <Container selectedPage={selectedPage}>
        {selectedPage !== 'pedido-realizado' && (<BuySteps selectedPage={selectedPage} >
          <Link to='' >Carrinho</Link>
          <Link to={(backStep.current.entrega || backStep.current.pagamento) && 'entrega'} >Entrega</Link>
          <Link to={backStep.current.pagamento && 'pagamento'} >Pagamento</Link>
        </BuySteps>)}
      
      <Routes>
        <Route path='/' element={<CartProducts />} />
        <Route path='entrega' element={<CartShipping />} />
        <Route path='pagamento' element={<CartPayment />} />
        <Route path='pedido-realizado' element={<CartOrder />} />
      </Routes>
      
      {selectedPage !== 'pedido-realizado' && (<Summary backStep={backStep} selectedPage={selectedPage} />)}
    </Container>
  )
}

export default Cart