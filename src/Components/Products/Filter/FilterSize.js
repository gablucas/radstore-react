import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context';
import { FilterWrapper, ProductSize } from './styles';
import useFilter from '../../../hooks/useFilter';

const measures = {
  camisas: ["PP", "P", "M", "G", "GG"],
  camisetas: ["PP", "P", "M", "G", "GG"],
  moletons: ["PP", "P", "M", "G", "GG"],
  calcas: ["38", "40", "42", "44", "46", "48", "50"],
  bermudas: ["38", "40", "42", "44", "46", "48", "50"],
  boardshorts: ["38", "40", "42", "44", "46", "48", "50"],
  tenis: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
}

const FilterSize = () => {
  const { searchParams , setSearchParams } = React.useContext(GlobalContext);
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
        <ProductSize key={measure} onClick={() => handleSize(measure)} selected={selectedSize.current === measure} ><span>{measure}</span></ProductSize>
      )))}
    </div>

  </FilterWrapper>
  )
}

export default FilterSize