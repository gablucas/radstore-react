import React, { useRef } from 'react';
import { Container } from './styles';
import { GlobalContext } from '../../Context';
import Product from '../../Products/Product';

const Category = () => {
  const { products } = React.useContext(GlobalContext);
  const [randomProducts, setRandomProducts] = React.useState([]);
  const index = useRef();
  
  React.useEffect(() => {
    if (products.length) {
      const random = [];
      for (let i = 0; i < 8; i++) {
        do {
          index.current = Math.floor(Math.random() * products.length)
        } while (random.some((s) => s === index.current))
        random.push(products[index.current])
      }
      setRandomProducts(random)
      console.log(random)
    }
  }, [products])

  
  return (
    <Container>
        <h2>Conheça alguns produtos</h2>

        <div>
          {randomProducts?.map(product => (
          <Product key={product.id} product={product} />
        ))}
        </div>
    </Container>
  )
}

export default Category