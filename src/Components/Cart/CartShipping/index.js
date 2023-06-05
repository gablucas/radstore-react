import React from 'react'
import AddressForm from '../../AddressForm'
import { GlobalContext } from '../../Context'
import { Title } from '../styles'
import { Addresses, AddressWrapper, RegisterAddress } from './styles'
import { Error } from '../../../global'

const CartShipping = () => {
  const { loggedUser, setCheckout, checkout } = React.useContext(GlobalContext);
  const [altTab, setAltTab] = React.useState(false);

  function handleSelectAddress(address) {

    if (checkout.address !== address) {
      setCheckout(checkout => ({...checkout, address, payment: {...checkout.payment, shipping: 30}}))
    }
  }

  return (
    <div>
      {!altTab ? (
        <Addresses>
          <Title>Escolha um endereço de entrega</Title>
          
          <div>
            {loggedUser?.addresses.map((m, index) => (
              <AddressWrapper key={index} onClick={() => handleSelectAddress(m.id)} selectedAddress={checkout.address === m.id}>
                <span>{m.identification}</span>
                <span>Destinatário: {m.name}</span>
                <span>{m.address}, {m.number} - {m.city}, {m.neighborhood} - {m.uf} - {m.cep} </span>
              </AddressWrapper>
            ))}
          </div>

          <button onClick={() => setAltTab(true)}>+ Adicionar novo endereço</button>
        </Addresses>
      ) : (
        <RegisterAddress>
          <Title>Registrar novo endereço</Title>
          <AddressForm goback={() => setAltTab(false)} saveAddress={() => setAltTab(false)} />
        </RegisterAddress>
      )}
      <Error></Error>
    </div>
  )
}

export default CartShipping