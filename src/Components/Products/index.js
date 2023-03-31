import React from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context';
import Filter from './Filter';
import Product from './Product';
import { Container, ShowProducts } from './styles';

const Products = () => {
  const {setData, filteredData} = React.useContext(GlobalContext);
  let {category, type} = useParams();

  React.useEffect(() => {
    fetch(`https://gablucas.github.io/jsonapi/radstore/${category}/${type}.json`)
    .then(response => response.json())
    .then(json => setData(json[type]))
  }, [category, type, setData])

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