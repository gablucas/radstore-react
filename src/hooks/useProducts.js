import React from 'react';
import { api } from '../services/api';

const useProducts = () => {
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    api.get('data.json').then((response) => {
      setProducts(response.data)
    });
  }, [])


  return { products };
}

export default useProducts;