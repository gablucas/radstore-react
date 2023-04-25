import React from 'react'
import { Link } from 'react-router-dom'
import Favorite from '../../Favorite'
import { Container } from './styles'

const Product = ({ product }) => {

  return (
    <Container>
      <Favorite id={product.id} />
      <Link to={`/produto/${product.id}`}>
        <img src={product.image} alt="" />
        <span>{product.name}</span>
        <span>{product.price}</span>
      </Link>
    </Container>
  )
}

export default Product