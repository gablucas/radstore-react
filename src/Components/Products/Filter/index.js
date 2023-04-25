import React from 'react'
import { GlobalContext } from '../../Context'
import FilterColor from './FilterColor'
import FilterPrice from './FilterPrice'
import FilterSize from './FilterSize'
import { Container } from './styles'
import useFilter from '../../../hooks/useFilter'

const Filter = () => {
  const { setFilteredProducts } = React.useContext(GlobalContext);
  const { filterParams } = useFilter();
  
  React.useEffect(() => {
    setFilteredProducts(filterParams({type: true, genre: true, size: true, color: true, price: true}));
  }, [filterParams, setFilteredProducts])

  return (
    <Container>
      <FilterSize />
      <FilterColor />
      <FilterPrice />
    </Container>
  )
}

export default Filter