import React from 'react'
import { GlobalContext } from '../../Context'
import FilterColor from './FilterColor'
import FilterPrice from './FilterPrice'
import FilterSize from './FilterSize'
import { Container } from './styles'
import useFilter from '../../../hooks/useFilter'

const Filter = () => {
  const { setFilteredData } = React.useContext(GlobalContext);
  const { filterParams } = useFilter();

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