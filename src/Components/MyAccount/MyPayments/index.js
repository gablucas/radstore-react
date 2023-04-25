import React from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage';
import { GlobalContext } from '../../Context';
import CreditCardForm from '../../CreditCardForm';
import { CardWrapper, Container } from './styles'

const MyPayments = () => {
  const { loggedUser } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();
  const [altTab, setAltTab] = React.useState(false);

  function handleEditPayment() {

  }

  function handleRemovePayment(id) {
    const user = loggedUser;
    user.payment = user.payment.filter((f) => f.id !== id);

    const users = JSON.parse(getValue('users')).map((m) => {
      if (m.email === user.email) {
        return user;
      }
      return m;
    })

    setValue('users', JSON.stringify(users));
    setValue('loggeduser', JSON.stringify(user));
    window.location.reload();
  }

  function handleMainPayment(index) {
    const user = loggedUser;
    const newMainAdress = user.payment.splice(index, 1);
    user.payment.unshift(...newMainAdress);

    const users = JSON.parse(getValue('users')).map((m) => {
      if (m.email === user.email) {
        return user;
      }
      return m;
    })

    setValue('users', JSON.stringify(users));
    setValue('loggeduser', JSON.stringify(user));
    window.location.reload();
  }

  return (
    <Container>
      <h1>Pagamentos</h1>
        {!altTab ? (
          <div>
            {loggedUser?.payment.map((m, index) => (
              <CardWrapper key={index} >
                <div>
                  <span>{m.cardname}</span>
                  <span>Numero: {m.cardnumber}</span>
                  <span>Vencimento: {m.validity[0] + '/' + m.validity[1]}</span>
                </div>

                <div>
                  <span onClick={() => handleEditPayment(m)}>Editar</span>
                  <span onClick={() => handleRemovePayment(m.id)}>Excluir</span>
                  {index === 1 && (<span onClick={() => handleMainPayment(index)} >Definir como cartão principal</span>)}
                </div>
              </CardWrapper>
            ))}
            <button onClick={() => setAltTab(true)}>+ Adicionar novo cartão</button>
          </div>
            ) : (
            <div>
              <h2>REGISTRAR NOVO CARTÃO</h2>
              <CreditCardForm goback={() => setAltTab(false)} savePayment={() => setAltTab(false)}/>
          </div>
        )}
    </Container>
  )
}

export default MyPayments