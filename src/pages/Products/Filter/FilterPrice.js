import React, { useRef } from 'react'
import { GlobalContext } from '../../../components/Context'
import { ButtonPrice, FilterWrapper, ProductPrice } from './styles';
import useFilter from '../../../hooks/useFilter';

let pricerange = [[50, 100], [100, 150], [150, 200], [200, 250], [250, 300], [300, 350], [350, 400], [400, 1000], [1000, 1500], [1500, 3000]]

const FilterPrice = () => {
  const { searchParams, setSearchParams } = React.useContext(GlobalContext);
  const { filterParams, price: priceParam } = useFilter();
  const selectedPrice = useRef();
  const quantityPerPrice = useRef(0);
  const filteredProducts = filterParams({size: true, color: true, price: false});

  function handlePrice(price) {
    const priceToParam = price.toString().replace(',','-');

    if (priceParam === priceToParam) {
      selectedPrice.current = "";
      searchParams.delete('price');
      setSearchParams(searchParams);
    } else {
      selectedPrice.current = priceToParam;
      let updatedSearchParams = new URLSearchParams(searchParams.toString());
      updatedSearchParams.set('price', priceToParam);
      setSearchParams(updatedSearchParams.toString());
    }
  }

  React.useEffect(() => {
    if (filteredProducts) {
      quantityPerPrice.current = pricerange.map((pr) => filteredProducts.filter((prf) => parseInt(prf.price) >= pr[0] && parseInt(prf.price) <= pr[1]).length);
      console.log(quantityPerPrice.current)
    }
  }, [selectedPrice, priceParam, filterParams, filteredProducts])


  React.useEffect(() => {
    if (priceParam) selectedPrice.current = priceParam.split('-').map(Number);
  }, [priceParam])

  return (
    <FilterWrapper>
    <span>Faixa de preço</span>

    <ProductPrice>
      {pricerange.map((price, index) => (
        <ButtonPrice key={price[0]} onClick={() => handlePrice(price)} selected={selectedPrice.current?.toString() === price?.toString()} disabled={quantityPerPrice.current[index] === 0}>De R$ {price[0]} a R$ {price[1]} ({quantityPerPrice.current?.[index]})</ButtonPrice>
      ))}
      
    </ProductPrice>
  </FilterWrapper>
  )
}

export default FilterPrice