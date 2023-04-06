import React from 'react'
import useLogged from '../../../hooks/useLogged'
import AddressForm from '../../AddressForm'
import { GlobalContext } from '../../Context'
import { Addresses, AddressWrapper, RegisterAddress, Title } from './styles'

const CartShipping = () => {
  const { loggedUser } = React.useContext(GlobalContext);
  const [altTab, setAltTab] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState();
  useLogged();

  function handleSelectAddress(address) {
    setSelectedAddress(address)
  }


  return (
    <div>
      {!altTab ? (
        <Addresses>
          <Title>Escolha um endereço de entrega</Title>

          <div>
            {loggedUser?.addresses.map((m, index) => (
              <AddressWrapper key={index} onClick={() => handleSelectAddress(m.address)} selectedAddress={selectedAddress === m.address}>
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
    </div>
  )
}

export default CartShipping