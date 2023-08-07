import React, { useContext, useMemo, useRef } from 'react';
import { BuySteps, Container } from './styles';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import CartProducts from './CartProducts';
import CartShipping from './CartShipping';
import Summary from './Summary';
import CartPayment from './CartPayment';
import { GlobalContext } from '../Context';
import CartOrder from './CartOrder';


const Cart = () => {
  const { setBgColor, cart, setToggleMenuMobile } = React.useContext(GlobalContext);
  const { products } = useContext(GlobalContext);
  const selectedPage = useParams()["*"];
  const backStep = useRef({entrega: false, pagamento: false});
  const navigate = useNavigate();

  React.useEffect(() => {
    setToggleMenuMobile('');
  }, [setToggleMenuMobile])

  const productsDetails = useMemo(() => {
    return products ? cart.map((m) =>  ({...m, data: products.find((f) => f.id === m.id)})) : undefined;
  }, [products, cart]);


  React.useEffect(() => {
    if((selectedPage === 'entrega' && !backStep.current.entrega) || (selectedPage === 'pagamento' && !backStep.current.pagamento)) {
      navigate('/carrinho');
    }
  }, [navigate, selectedPage])


  React.useEffect(() => {
    setBgColor(true);
  }, [setBgColor])

  
  if (productsDetails)
  return (
    <Container selectedPage={selectedPage}>
        {selectedPage !== 'pedido-realizado' && (<BuySteps selectedPage={selectedPage} >
          <Link to='' >Carrinho</Link>
          <Link to={(backStep.current.entrega || backStep.current.pagamento) && 'entrega'} >Entrega</Link>
          <Link to={backStep.current.pagamento && 'pagamento'} >Pagamento</Link>
        </BuySteps>)}
      
      <Routes>
        <Route path='/' element={<CartProducts productsDetails={productsDetails}/>} />
        <Route path='entrega' element={<CartShipping />} />
        <Route path='pagamento' element={<CartPayment />} />
        <Route path='pedido-realizado' element={<CartOrder productsDetails={productsDetails}/>} />
      </Routes>
      
      {selectedPage !== 'pedido-realizado' && (<Summary backStep={backStep} selectedPage={selectedPage} />)}
    </Container>
  )
}

export default Cart