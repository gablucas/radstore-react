import React from 'react';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import useForm from '../hooks/useForm';
import Input from './Forms/Input';
import { GlobalContext } from './Context';

const Container = styled.div`
  & > div:last-of-type {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: end;
    gap: 20px;
    margin-top: 20px;
    height: 48px;
  }

  button {
    text-align: center;
    font: var(--font1-16-b);
  }

  button:first-of-type {
    padding: 0px 20px;
    color: #2B2B2B;
    background: #FFA700;
  }

  button:last-of-type {
    padding: 0px 120px;
    color: #F7F7F7;
    background: #2B2B2B;
  }

  @media (max-width: 1024px) {
      button:last-of-type {
      padding: 0px 40px;
    }
  }
`

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 2fr 2fr 1fr;
  gap: 10px 40px;
  margin-top: 20px;

  input {
    display: block;
    height: 40px;
    width: 100%;
    padding-left: 10px;
    border: 1px solid #C8C8C8;
  }

  div:nth-of-type(1) {
    grid-column: 1/4;
  }

  div:nth-of-type(2) {
    grid-column: 4/7;
  }

  div:nth-of-type(3) {
    grid-column: 1/2;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;

    div:nth-of-type(2) {
      grid-column: 1/4;
    }
  }

`

const CreditCardForm = ({ goback, savePayment }) => {
  const { loggedUser } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();

  const cardnumber = useForm({type: 'number', empty: true, regex: true});
  const cardname = useForm({type: 'text', empty: true, regex: true});
  const validityMonth = useForm({type: 'number', empty: true, regex: true});
  const validityYear = useForm({type: 'number', empty: true, regex: true});
  const cvv = useForm({type: 'number', empty: true, regex: true});

  function handleBack() {
    goback();
  }

  function handleSave() {
    if(cardnumber.validate() && cardname.validate() && validityMonth.validate() && validityYear.validate() && cvv.validate()) {
      const user = loggedUser;
      const card = { id: user.payment[user.payment.length - 1]?.id + 1 || 1, cardnumber: cardnumber.value, cardname: cardname.value, validity: [validityMonth.value, validityYear.value], cvv: cvv.value }
      user.payment.push(card);

      const users = JSON.parse(getValue('users')).map((m) => {
        if (m.email === user.email) {
          return user;
        }
        return m;
      })
      
      setValue('loggeduser', JSON.stringify(user));
      setValue('users', JSON.stringify(users));
      savePayment(); 
    }
  }

  return (
    <Container>
      <FormWrapper>
        <Input label="Número do cartão" type='number' name='cardnumber' placeholder='' {...cardnumber} />
        <Input label="Nome do titular" type='text' name='cardname' {...cardname} />
        <Input label="Mês" type='number' name='validityMonth' {...validityMonth} />
        <Input label="Ano" type="text" name="number" {...validityYear} />
        <Input label="CVV" type='text' name='city' {...cvv} />
      </FormWrapper>

      <div>
        <button onClick={handleBack}>Voltar</button>
        <button onClick={handleSave}>Salvar</button>
      </div>
    </Container>
  )
}

export default CreditCardForm;