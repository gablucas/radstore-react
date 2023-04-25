import React, { useCallback, useRef } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../components/Context';

export const useFilter = () => {
  const { products } = React.useContext(GlobalContext);
  const [searchParams] = useSearchParams();
  const { type } = useParams();
  const genre = searchParams.get('genre');
  const size = searchParams.get('size');
  const color = searchParams.get('color');
  const price = searchParams.get('price');
  let filterData = useRef();

  const filterParams = useCallback((filter) => {
    if (products) {
      filterData.current = Array.from(products);

      if (type && filter.type) {
        filterData.current = filterData.current.filter((d) => d.type === type);
      }

      if (genre && filter.genre) {
        filterData.current = filterData.current.filter((d) => d.genre === genre);
      }

      if (size && filter.size) {
        filterData.current = filterData.current.filter((s) => s.sizes.some((ss) => ss === size));
      }
      
      if (price && filter.price) {
        const convert = price?.split('-').map(Number);
        filterData.current = filterData.current.filter((p) => parseInt(p.price) >= convert[0] && parseInt(p.price) <= convert[1]);
      }

      if (color && filter.color) {
        filterData.current = filterData.current.filter((d) => d.color[0] === color);
      }
    }
    return filterData.current;
  }, [products, type, genre, size, price, color])

  return {filterParams, genre, size, color, price}
}

export default useFilter