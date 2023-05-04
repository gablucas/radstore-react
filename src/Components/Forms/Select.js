import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import { GlobalContext } from '../Context';

const Select = ({saveValue, options, index, names }) => {
  const { setCart } = React.useContext(GlobalContext);
  const [quantity, setQuantity] = React.useState();
  const { getValue, setValue } = useLocalStorage();

  function handleSelect({ target }) {
    if (saveValue) {
      saveValue(target.value)
    }

    setQuantity(target.value)
    let cart = JSON.parse(getValue('cart'));

    cart = cart.map((m, i) => {
      if (i === index) {
        return {...m, quantity: parseInt(target.value)}
      }

      return m;
    })

    setValue('cart', JSON.stringify(cart));
    setCart(cart);
  }

  return (
    <div>
      <select value={quantity} onChange={(e) => handleSelect(e)}>
      {options.map((m, index) => (
        <option key={m} value={index + 1} >{m}</option>
      ))}

      </select>
    </div>
  )
}

export default Select