import React from 'react';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import useForm from '../hooks/useForm';
import Input from './Forms/Input';
import { GlobalContext } from './Context';
import { addressApi } from '../services/api';

const Container = styled.div`
  & > div:last-of-type {
    display: flex;
    justify-content: end;
    gap: 20px;
    margin-top: 20px;
    height: 48px;
  }

  button {
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
    width: 100%;
    height: 40px;
    padding-left: 10px;
    border: 1px solid #C8C8C8;
  }

  div:nth-of-type(1),
  div:nth-of-type(8),
  div:nth-of-type(10) {
    grid-column: 1/4;
  }

  div:nth-of-type(3) {
    grid-column: 1/3;
  }


  div:nth-of-type(2),
  div:nth-of-type(9),
  div:nth-of-type(11) {
    grid-column: 4/7;
  }

  @media (max-width: 1440px) {
    gap: 10px 20px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

const AddressForm = ({ goback, saveAddress, editAddress }) => {
  const { loggedUser } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();

  const identificacao = useForm({type: 'text', initialValue: editAddress?.edit ? editAddress.address.identification : "", empty: true, regex: true});
  const cep = useForm({type: 'number', initialValue: editAddress?.edit ? editAddress.address.cep : "", empty: true, regex: true});
  const endereco = useForm({type: 'text', initialValue: editAddress?.edit ? editAddress.address.address : "", empty: true, regex: true});
  const numero = useForm({type: 'number', initialValue: editAddress?.edit ? editAddress.address.number : "", empty: true, regex: true});
  const cidade = useForm({type: 'text', initialValue: editAddress?.edit ? editAddress.address.city : "", empty: true, regex: true});
  const bairro = useForm({type: 'text', initialValue: editAddress?.edit ? editAddress.address.neighborhood : "", empty: true, regex: true});
  const uf = useForm({type: 'text', initialValue: editAddress?.edit ? editAddress.address.uf : "", empty: true, regex: true});
  const complemento = useForm({type: false, initialValue: editAddress?.edit ? editAddress.address.complement : ""});
  const referencia = useForm({type: false,  initialValue: editAddress?.edit ? editAddress.address.reference : ""});
  const nome = useForm({type: 'text', initialValue: editAddress?.edit ? editAddress.address.name : "", empty: true, regex: true});
  const telefone = useForm({type: 'number', initialValue: editAddress?.edit ? editAddress.address.phone : "", empty: true, regex: true});

  function handleBack() {
    goback();
  }

  function handleSave() {
    if (identificacao.validate() && cep.validate() && endereco.validate() && numero.validate() && cidade.validate() && bairro.validate() && uf.validate() && nome.validate() && telefone.validate()) {

      const user = loggedUser;
      const users = JSON.parse(getValue('users'));
      const address = {identification: identificacao.value, cep: cep.value, address: endereco.value, number: numero.value, city: cidade.value, neighborhood: bairro.value, uf: uf.value, complement: complemento.value, reference: referencia.value, name: nome.value, phone: telefone.value};

      if (!editAddress?.edit) {
        address.id = user.addresses[user.addresses.length - 1]?.id + 1 || 1;
        user.addresses.push(address);
      } else {
        address.id = editAddress.address.id;
        user.addresses = user.addresses.map((m) => {
          if (m.id === editAddress.address.id) {
            return address;
          }
          return m;
        })
      }

      
      users.map((m) => {
        if (m.email === user.email) {
          return user;
        }
        return m;
      })
      
      setValue('loggeduser', JSON.stringify(user));
      setValue('users', JSON.stringify(users));
      saveAddress()    
    }
  }

  return (
    <Container>
      <FormWrapper>
        <Input label="Identificação" type='text' name='identification' placeholder='Minha casa, Casa da mãe...' {...identificacao} />
        <Input label="Cep" type='text' name='cep' {...cep} />
        <Input label="Endereço" type='text' name='address' {...endereco} />
        <Input label="Número" type="text" name="number" {...numero} />
        <Input label="Cidade" type='text' name='city' {...cidade} />
        <Input label="Bairro" type='text' name='neighborhood' {...bairro} />
        <Input label="UF" type='text' name='uf' {...uf} />
        <Input label="Complemento" type='text' name='complement' {...complemento} />
        <Input label="Referência" type='text' name='reference' {...referencia} />
        <Input label="Nome" type='text' name='name' {...nome} />
        <Input label="Telefone" type='text' name='phone' {...telefone} />
      </FormWrapper>

      <div>
        <button onClick={handleBack}>Voltar</button>
        <button onClick={handleSave}>Salvar</button>
      </div>
    </Container>
  )
}

export default AddressForm;