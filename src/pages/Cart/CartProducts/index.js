import React from 'react';
import { Product, ProductInfo } from './styles';
import Select from '../../../components/Forms/Select';
import FunctionButtons from './FunctionButtons';
import Image from '../../../components/Helper/Image';
import { GlobalContext } from '../../../components/Context';

const CartProducts = ({ productsDetails }) => {
  const { cart, setCheckout } = React.useContext(GlobalContext);


  React.useEffect(() => {
    setCheckout(checkout => ({...checkout, items: cart, payment: {...checkout.payment, subtotal: productsDetails.reduce((acc, cur) => acc + cur.quantity * parseInt(cur.data.price), 0)}}))
  }, [cart, setCheckout, productsDetails])

  if (productsDetails)
  return (
    <div>
    {productsDetails.map((m, index) => (
      <Product key={index} >

        <ProductInfo>
          <Image url={m.data.image} />

          <div>
            <span>Produto</span>
            <span>{m.data.name}</span>
            <span>TAMANHO: {m.measure}</span>
            <span>COR: {m.data.color[0]}</span>
          </div>
        </ProductInfo>

        <div>
          <span>Quantidade</span>
          <Select options={[1,2,3,4,5,6,7]} initialValue={1} index={index} />
        </div>

        <div>
          <span>Preço</span>
          <span>R$ {m.data.price}</span>
        </div>

        <div>
          <span>Produto</span>
          <span>R$ {parseFloat(m.data.price) * m.quantity},00</span>
        </div>

        <FunctionButtons index={index} />

      </Product>
    ))}

    </div>
  )
  return (<h1>Seu carrinho está vazio</h1>)
}

export default CartProducts