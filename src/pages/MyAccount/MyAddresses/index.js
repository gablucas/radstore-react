import React, { useRef } from 'react';
import { Addresses, AddressWrapper, Container, RegisterAddress } from './styles';
import { GlobalContext } from '../../../components/Context';
import AddressForm from '../../../components/AddressForm';
import useLocalStorage from '../../../hooks/useLocalStorage';

const MyAddresses = () => {
  const { loggedUser } = React.useContext(GlobalContext);
  const [altTab, setAltTab] = React.useState(false);
  const { getValue, setValue } = useLocalStorage();
  const editAddress = useRef({ edit: false });

  function handleMainAddress(index) {
    const user = loggedUser;
    const newMainAdress = user.addresses.splice(index, 1);
    user.addresses.unshift(...newMainAdress);

    const users = JSON.parse(getValue('radstore')).map((m) => {
      if (m.email === user.email) {
        return user;
      }
      return m;
    })

    setValue('radstore', JSON.stringify(users));
    setValue('radstoreLoggedUser', JSON.stringify(user));
    window.location.reload();
  }

  function handleRemoveAddress(id) {
    const user = loggedUser;
    user.addresses = user.addresses.filter((f) => f.id !== id);

    const users = JSON.parse(getValue('radstore')).map((m) => {
      if (m.email === user.email) {
        return user;
      }
      return m;
    })

    setValue('radstore', JSON.stringify(users));
    setValue('radstoreLoggedUser', JSON.stringify(user));
    window.location.reload();
  }

  function handleEditAddress(address) {
    editAddress.current.edit = true;
    editAddress.current.address = address;
    setAltTab(true)
  }


  return (
    <Container>
      <h1>Meus endereços</h1>
      {!altTab ? (
        <Addresses>

          <div>
            {loggedUser?.addresses.map((m, index) => (
              <AddressWrapper key={index} >

                <div>
                  <span>{m.identification}</span>
                  <span>Destinatário: {m.name}</span>
                  <span>{m.address}, {m.number} - {m.city}, {m.neighborhood} - {m.uf} - {m.cep} </span>
                </div>

                <div>
                  <span onClick={() => handleEditAddress(m)}>Editar</span>
                  <span onClick={() => handleRemoveAddress(m.id)}>Excluir</span>
                  {index === 1 && (<span onClick={() => handleMainAddress(index)} >Definir como endereço principal</span>)}
                </div>

              </AddressWrapper>
            ))}
          </div>

          <button onClick={() => setAltTab(true)}>+ Adicionar novo endereço</button>
        </Addresses>
      ) : (
        <RegisterAddress>
          <AddressForm goback={() => setAltTab(false)} saveAddress={() => setAltTab(false)} editAddress={editAddress.current} />
        </RegisterAddress>
      )}
    </Container>
  )
}

export default MyAddresses