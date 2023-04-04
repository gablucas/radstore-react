import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import { GlobalContext } from '../Context';

const Select = ({ options, initialValue, index }) => {
  const { setCartStorage } = React.useContext(GlobalContext);
  const [quantity, setQuantity] = React.useState();
  const { getValue, setValue } = useLocalStorage();

  function handleSelect({ target }) {
    setQuantity(target.value)
    let cart = JSON.parse(getValue('cart'));

    cart = cart.map((m, i) => {
      if (i === index) {
        return {...m, quantity: parseInt(target.value)}
      }

      return m;
    })

    setValue('cart', JSON.stringify(cart));
    setCartStorage(cart)
  }


  React.useEffect(() => {
    setQuantity(initialValue)
  }, [initialValue, setQuantity])

  return (
    <div>
      <select value={quantity} onChange={(e) => handleSelect(e)}>
      {options.map((m) => (
        <option key={m}>{m}</option>
      ))}

      </select>
    </div>
  )
}

export default Select