import React from 'react';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import useForm from '../hooks/useForm';
import Input from './Forms/Input';
import { GlobalContext } from './Context';

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

`

const AddressForm = ({ goback, saveAddress, editAddress }) => {
  const { loggedUser } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();

  const identificacao = useForm({type: 'text', empty: true, regex: true});
  const cep = useForm({type: 'number', empty: true, regex: true});
  const endereco = useForm({type: 'text', empty: true, regex: true});
  const numero = useForm({type: 'number', empty: true, regex: true});
  const cidade = useForm({type: 'text', empty: true, regex: true});
  const bairro = useForm({type: 'text', empty: true, regex: true});
  const uf = useForm({type: 'text', empty: true, regex: true});
  const complemento = useForm({type: false});
  const referencia = useForm({type: false});
  const nome = useForm({type: 'text', empty: true, regex: true});
  const telefone = useForm({type: 'number', empty: true, regex: true});

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

  // NÃO ESTA SENDO POSSÍVEL ALTERAR O VALOR DO INPUT QUANDO É ADICIONADO AS EDITADDRESS COMO DEPENDENCIA
  React.useEffect(() => {
    if (editAddress?.edit) {
      identificacao.setValue(editAddress.address.identification)
      cep.setValue(editAddress.address.cep)
      endereco.setValue(editAddress.address.address)
      numero.setValue(editAddress.address.number)
      cidade.setValue(editAddress.address.city)
      bairro.setValue(editAddress.address.neighborhood)
      uf.setValue(editAddress.address.uf)
      complemento.setValue(editAddress.address.complement)
      referencia.setValue(editAddress.address.reference)
      nome.setValue(editAddress.address.name)
      telefone.setValue(editAddress.address.phone)
    }
  }, [])


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