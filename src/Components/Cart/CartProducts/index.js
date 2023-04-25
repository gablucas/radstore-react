import React from 'react';
import { ListTitle, Product, ProductInfo } from './styles';
import Select from '../../Forms/Select';
import FunctionButtons from './FunctionButtons';
import { GlobalContext } from '../../Context';

const CartProducts = ({ productsDetails }) => {
  const { setCheckout } = React.useContext(GlobalContext);

  React.useEffect(() => {

    setCheckout(checkout => ({...checkout, payment: {...checkout.payment, subtotal: productsDetails.reduce((acc, cur) => acc + cur.quantity * parseInt(cur.data.price), 0)}}))
  }, [setCheckout, productsDetails])

  return (
    <div>
      <ListTitle>
        <span>Produto</span>
        <span>Quantidade</span>
        <span>Preço</span>
        <span>Total</span>
        <span>Funções</span>
      </ListTitle>


    {productsDetails?.map((m, index) => (
      <Product key={index} >

        <ProductInfo>
          <div><img src={m.data.image} alt="" /></div>
          <div>
            <span>{m.data.name}</span>
            <span>TAMANHO: {m.measure}</span>
            <span>COR: {m.data.color[0]}</span>
          </div>
        </ProductInfo>

        <Select options={[1,2,3,4,5,6,7]} initialValue={1} index={index} />

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