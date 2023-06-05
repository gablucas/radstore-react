import React from 'react'
import { Link } from 'react-router-dom'
import Favorite from '../../Favorite'
import Image from '../../Helper/Image'
import { Container } from './styles'

const Product = ({ product }) => {

  return (
    <Container>
      <Favorite id={product.id} topPosition='20px' rightPosition='20px' />
      <Link to={`/produto/${product.id}`}>
        <Image url={product.image} />
        <span>{product.name}</span>
        <span>{parseInt(product.price).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
      </Link>
    </Container>
  )
}

export default Product