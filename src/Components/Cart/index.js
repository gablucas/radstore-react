import React, { useRef } from 'react';
import { BuySteps, Container } from './styles';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import CartProducts from './CartProducts';
import CartShipping from './CartShipping';
import Summary from './Summary';
import useLogged from '../../hooks/useLogged';

const Cart = () => {
  const selectedPage = useParams()["*"];
  const backStep = useRef({entrega: false, pagamento: false});
  const navigate = useNavigate();
  useLogged();

  React.useEffect(() => {
    if((selectedPage === 'entrega' && !backStep.current.entrega) || (selectedPage === 'pagamento' && !backStep.current.pagamento)) {
      navigate('/carrinho')
    }
  }, [navigate, selectedPage])
  

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
      </Routes>

      <Summary backStep={backStep} selectedPage={selectedPage} />

    </Container>
  )
}

export default Cart