import React from 'react';
import { ListTitle, Product, ProductInfo } from './styles';
import useLocalStorage from '../../../hooks/useLocalStorage'
import { useQuery } from 'react-query';
import { api } from '../../../services/api';
import Select from '../../Forms/Select';
import FunctionButtons from './FunctionButtons';
import { GlobalContext } from '../../Context';

const CartProducts = () => {
  const { cartStorage, setCartStorage, cart, setCart } = React.useContext(GlobalContext);
  const { getValue } = useLocalStorage();

  const { data } = useQuery('products', async () => {
    const { data } = await api.get('data.json');

    return data;
  })

  React.useEffect(() => {
    setCartStorage(JSON.parse(getValue('cart')))
  }, [getValue, setCartStorage])

  
  React.useEffect(() => {
    if (data && cartStorage) {
      const cartProducts = cartStorage.map((m) =>  ({...m, data: data.find((f) => f.id === m.id)}));
      setCart(cartProducts);
    }
  }, [getValue, data, cartStorage, setCart])

  
  return (
    <div>
      <ListTitle>
        <span>Produto</span>
        <span>Quantidade</span>
        <span>Preço</span>
        <span>Total</span>
        <span>Funções</span>
      </ListTitle>


    {cart?.map((m, index) => (
      <Product key={index} >

        <ProductInfo>
          <div><img src={m.data.image} alt="" /></div>
          <div>
            <span>{m.data.name}</span>
            <span>TAMANHO: {m.measure}</span>
            <span>COR: {m.data.color[0]}</span>
          </div>
        </ProductInfo>

        <Select options={[1,2,3,4,5,6,7]} initialValue={m.quantity} index={index} />

        <div>
          <span>R$ {m.data.price}</span>
        </div>

        <div>
          <span>R$ {parseFloat(m.data.price) * m.quantity},00</span>
        </div>

        <FunctionButtons index={index} />

      </Product>
    ))}

    </div>
  )
}

export default CartProducts