import React from 'react'
import styled from 'styled-components';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { GlobalContext } from '../../Context';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button:hover {
    font-weight: 600;
  }
`

const FunctionButtons = ({ index }) => {
  const { setCartStorage, setCartQuantity } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();

  function handleRemove() {
    let cart = JSON.parse(getValue('cart'));
    cart = cart.filter((f, i) => i !== index);
    setValue('cart', JSON.stringify(cart));
    setCartStorage(cart);
    setCartQuantity(cart.lenght || 0)
  }


  return (
    <Container>
      <button onClick={handleRemove} >Remover</button>
      <button>Favoritar</button>
    </Container>
  )
}

export default FunctionButtons