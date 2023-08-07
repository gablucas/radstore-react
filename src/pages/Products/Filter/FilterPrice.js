import React, { useRef } from 'react'
import { GlobalContext } from '../../../components/Context'
import { ButtonPrice, FilterWrapper, ProductPrice } from './styles';
import useFilter from '../../../hooks/useFilter';

let pricerange =[[50, 100], [100, 150], [150, 200], [200, 250], [250, 300], [300, 350], [350, 400], [400, 1000]]

const FilterPrice = () => {
  const { searchParams, setSearchParams } = React.useContext(GlobalContext);
  const { filterParams, price } = useFilter();
  const selectedPrice = useRef();
  const quantityPerPrice = useRef(0);

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
    
    quantityPerPrice.current = filterParams({subcategory: true, genre: true, size: true, color: true, price: false});
    if (quantityPerPrice.current) {
      quantityPerPrice.current = pricerange.map((pr) => [quantityPerPrice.current.filter((prf) => parseInt(prf.price) >= pr[0] && parseInt(prf.price) <= pr[1]).length])
    }

    if (price) selectedPrice.current = price.split('-').map(Number);
  }, [selectedPrice, price, filterParams])


  return (
    <FilterWrapper>
    <span>Faixa de preço</span>

    <ProductPrice>
      {pricerange.map((price, index) => (
        <ButtonPrice key={price[0]} onClick={() => handlePrice(price)} selected={JSON.stringify(selectedPrice.current) === JSON.stringify(price)}>De R$ {price[0]} a R$ {price[1]} ({quantityPerPrice.current?.[index]})</ButtonPrice>
      ))}
      
    </ProductPrice>
  </FilterWrapper>
  )
}

export default FilterPrice