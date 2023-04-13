import React from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context';
import Filter from './Filter';
import Product from './Product';
import { Container, ShowProducts } from './styles';

const Products = () => {
  const { filteredData } = React.useContext(GlobalContext);
  const { type } = useParams();

  return (
    <Container>
      <h1>{type}</h1>

      <Filter />

      <ShowProducts>
      {filteredData?.map(product => (
        <Product key={product.id} product={product} />
      ))}
      </ShowProducts>

      
    </Container>
  )
}

export default Products