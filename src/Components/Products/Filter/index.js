import React from 'react'
import { GlobalContext } from '../../Context'
import FilterColor from './FilterColor'
import FilterPrice from './FilterPrice'
import FilterSize from './FilterSize'
import { Container } from './styles'
import useFilter from '../../../hooks/useFilter'
import { useParams } from 'react-router-dom'

const Filter = () => {
  const { searchParams, setData, setFilteredData } = React.useContext(GlobalContext);
  const { filterParams } = useFilter();
  const { type } = useParams();
  const genre = searchParams.get('genre');
  console.log(useParams())

  React.useEffect(() => {
    fetch(`https://gablucas.github.io/jsonapi/radstore/data.json`)
    .then(response => response.json())
    .then(json => setData(json.filter((p) => p.type === type)))
  }, [genre, type, setData])

  React.useEffect(() => {
    setFilteredData(filterParams({genre: true, size: true, color: true, price: true}));
  }, [filterParams, setFilteredData])

  return (
    <Container>
      <FilterSize />
      <FilterColor />
      <FilterPrice />
    </Container>
  )
}

export default Filter