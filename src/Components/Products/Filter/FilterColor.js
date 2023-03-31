import React, { useRef } from 'react'
import { useSearchParams } from 'react-router-dom';
import { FilterWrapper, ProductColor } from './styles'
import { GlobalContext } from '../../Context';
import useFilter from '../../../hooks/useFilter';

const FilterColor = () => {
  const {data} = React.useContext(GlobalContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const colors = useRef([]);
  const selectedColor = useRef('');
  const {filterParams, color} = useFilter()

  function handleColor(color) {
    const param = searchParams.get('color');
    
    if (param === color) {
      selectedColor.current = "";
      searchParams.delete('color');
      setSearchParams(searchParams);
    } else {
      selectedColor.current = color;
      let updatedSearchParams = new URLSearchParams(searchParams.toString());
      updatedSearchParams.set('color', color)
      setSearchParams(updatedSearchParams.toString());
    }
  }

  React.useEffect(() => {
    if (color) selectedColor.current = color;
      colors.current = filterParams({gender: true, size: true, price: true, color: false})
      colors.current = colors.current?.map((product) => product.color)
      colors.current = Array.from(new Set(colors.current?.map(JSON.stringify)), JSON.parse)
  }, [data, colors, searchParams, color, filterParams])

  return (
    <FilterWrapper>
    <span>Cores</span>

    <div>
      {colors.current?.map((color) => (
        <ProductColor key={color[0]} color={color[1]} colorName={color[0]} onClick={() => handleColor(color[0])} selected={selectedColor.current === color[0]} />
      ))}
    </div>

  </FilterWrapper>
  )
}

export default FilterColor