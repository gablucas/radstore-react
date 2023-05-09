import React from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context';
import Filter from './Filter';
import Product from './Product';
import { Container, ShowProducts } from './styles';

const Products = () => {
  const { filteredProducts, setToggleMenuMobile } = React.useContext(GlobalContext);
  const { category, subcategory } = useParams();

  React.useEffect(() => {
    setToggleMenuMobile(false);
  }, [setToggleMenuMobile])

  return (
    <Container>
      <h1>{subcategory ? subcategory : category}</h1>

      <Filter />

      <ShowProducts>
      {filteredProducts?.map(product => (
        <Product key={product.id} product={product} />
      ))}
      </ShowProducts>

      
    </Container>
  )
}

export default Products