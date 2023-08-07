import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../../components/Context';
import { FilterWrapper, ProductSize } from './styles';
import useFilter from '../../../hooks/useFilter';


const FilterSize = () => {
  const { searchParams , setSearchParams, measures } = React.useContext(GlobalContext);
  const { size } = useFilter();
  let { category, subcategory } = useParams();
  
  const selectedSize = useRef(size ? size : '');
  const measureType = useRef(subcategory && measures[subcategory] ? measures[subcategory] : measures[category]);

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


  return (
    <FilterWrapper>
    <span>Tamanho</span>
    
    <div>
      {measureType.current.map((measure => (
        <ProductSize key={measure} onClick={() => handleSize(measure)} selected={selectedSize.current === measure}>{measure}</ProductSize>)))}
    </div>

  </FilterWrapper>
  )
}

export default FilterSize