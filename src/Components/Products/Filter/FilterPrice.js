import React, { useRef } from 'react'
import { GlobalContext } from '../../Context'
import { ButtonPrice, FilterWrapper, ProductPrice } from './styles';
import useFilter from '../../../hooks/useFilter';

const pricerange =[[50, 100], [100, 150], [150, 200], [200, 250], [250, 300], [300, 350], [350, 400], [400, 1000]]

const FilterPrice = () => {
  const { searchParams, setSearchParams } = React.useContext(GlobalContext);
  const { price } = useFilter();
  const selectedPrice = useRef();

  function handlePrice(param) {

    // Faz um toggle na seleção de valores
    if (JSON.stringify(price) === JSON.stringify(param)) {
      selectedPrice.current = [];
      searchParams.delete('price');
      setSearchParams(searchParams);
    } else {
      selectedPrice.current = param;
      let updatedSearchParams = new URLSearchParams(searchParams.toString());
      updatedSearchParams.set('price', `${param[0]}-${param[1]}`)
      setSearchParams(updatedSearchParams.toString());
    }
  }

  React.useEffect(() => {
    if (price) selectedPrice.current = price.split('-').map(Number);
  }, [selectedPrice, price])


  return (
    <FilterWrapper>
    <span>Faixa de preço</span>

    <ProductPrice>
      {pricerange.map((price) => (
        <ButtonPrice key={price[0]} onClick={() => handlePrice(price)} selected={JSON.stringify(selectedPrice.current) === JSON.stringify(price)}>De R$ {price[0]} a R$ {price[1]}</ButtonPrice>
      ))}
      
    </ProductPrice>
  </FilterWrapper>
  )
}

export default FilterPrice