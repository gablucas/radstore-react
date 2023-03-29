import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Filter from './Filter';
import Product from './Product';
import { Container, ShowProducts } from './styles';

const Products = () => {
  const [data, setData] = React.useState();
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchParams] = useSearchParams();
  let genre = searchParams.get('genre');
  let {category, type} = useParams();

  React.useEffect(() => {
    fetch(`https://gablucas.github.io/jsonapi/radstore/${category}/${type}.json`)
    .then(response => response.json())
    .then(json => setData(json[type]))
  }, [category, type])

  React.useEffect(() => {
    setFilteredData(data?.filter((dataFilter) => dataFilter.genre === genre))
  }, [data, genre])


  return (
    <Container>
      <h1>{type}</h1>

      <Filter data={filteredData} />

      <ShowProducts>
      {filteredData?.map(product => (
        <Product key={product.id} product={product} />
      ))}
      </ShowProducts>

      
    </Container>
  )
}

export default Products