import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context';
import { FilterWrapper, ProductSize } from './styles';
import useFilter from '../../../hooks/useFilter';


const FilterSize = () => {
  const { searchParams , setSearchParams, measures } = React.useContext(GlobalContext);
  const selectedSize = useRef('');
  const { size } = useFilter();

  let { type } = useParams();

  function handleSize(size) {
    const param = searchParams.get('size');
    
    if (param === size) {
      selectedSize.current = "";
      searchParams.delete('size');
      setSearchParams(searchParams);
    } else {
      selectedSize.current = size;
      let updatedSearchParams = new URLSearchParams(searchParams.toString());
      updatedSearchParams.set('size', size)
      setSearchParams(updatedSearchParams.toString());
    }
  }

  React.useEffect(() => {
    if (size) selectedSize.current = size;
  }, [size])

  return (
    <FilterWrapper>
    <span>Tamanho</span>
    
    <div>
      {measures[type].map((measure => (
        <ProductSize key={measure} onClick={() => handleSize(measure)} selected={selectedSize.current === measure}>{measure}</ProductSize>
      )))}
    </div>

  </FilterWrapper>
  )
}

export default FilterSize