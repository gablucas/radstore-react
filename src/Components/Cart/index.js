import React from 'react'
import { BuySteps, Container } from './styles'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import CartProducts from './CartProducts'
import CartShipping from './CartShipping'

const Cart = () => {
  const selectedPage = useParams()["*"];

  return (
    <Container >
      <BuySteps selectedPage={selectedPage} >
        <Link to='' >Carrinho</Link>
        <Link to='entrega' >Entrega</Link>
        <Link to='pagamento' >Pagamento</Link>
      </BuySteps>

      <Routes>
        <Route path='/' element={<CartProducts />} />
        <Route path='entrega' element={<CartShipping />} />
      </Routes>
    </Container>
  )
}

export default Cart