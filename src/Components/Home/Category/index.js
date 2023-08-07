import React, { useContext } from 'react';
import { Container } from './styles';
import Product from '../../Products/Product';
import { useRandomItems } from '../../../hooks/useRandomItems';
import { GlobalContext } from '../../Context';


const Category = () => {
  const { products } = useContext(GlobalContext);
  const { randomItems } = useRandomItems();

  if (products)
  return (
    <Container>
        <h2>Conheça alguns produtos</h2>

        <div>
          {randomItems(products, 8).map(product => (
          <Product key={product.id} product={product} />
        ))}
        </div>
    </Container>
  )
}

export default Category