import React from 'react'
import styled from 'styled-components';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { GlobalContext } from '../../../components/Context';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button:hover {
    font-weight: 600;
  }
`

const FunctionButtons = ({ index }) => {
  const { setCart } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();

  function handleRemove() {
    let cart = JSON.parse(getValue('radstoreCart'));
    cart = cart.filter((f, i) => i !== index);
    setValue('radstoreCart', JSON.stringify(cart));
    setCart(cart);
  }


  return (
    <Container>
      <button onClick={handleRemove} >Remover</button>
      <button>Favoritar</button>
    </Container>
  )
}

export default FunctionButtons