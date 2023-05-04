import React from 'react'
import { GlobalContext } from '../../Context'
import FilterColor from './FilterColor'
import FilterPrice from './FilterPrice'
import FilterSize from './FilterSize'
import { Container, FilterMobile } from './styles'
import useFilter from '../../../hooks/useFilter'

const Filter = () => {
  const { setFilteredProducts } = React.useContext(GlobalContext);
  const [toggleFilterMobile, setToggleFilterMobile] = React.useState(false)
  const { filterParams } = useFilter();
  
  React.useEffect(() => {
    setFilteredProducts(filterParams({subcategory: true, genre: true, size: true, color: true, price: true}));
  }, [filterParams, setFilteredProducts])

  return (
    <Container toggleFilterMobile={toggleFilterMobile}>
      <FilterMobile onClick={() => setToggleFilterMobile(!toggleFilterMobile)}>Filtrar</FilterMobile>
      <FilterSize />
      <FilterColor />
      <FilterPrice />
    </Container>
  )
}

export default Filter