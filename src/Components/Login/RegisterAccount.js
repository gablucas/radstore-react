import React from 'react'
import { ButtonAccount, RegisterWrapper } from './styles';
import Input from '../Forms/Input';
import useForm from '../../hooks/useForm';
import useLocalStorage from '../../hooks/useLocalStorage';

const RegisterAccount = () => {
  const [error, setError] = React.useState(false);
  const [accountCreated, setAccountCreated] = React.useState(false);
  const { setValue, getValue } = useLocalStorage();

  const email = useForm({type: 'email'});
  const password = useForm({type: 'password'});
  const confirmPassword = useForm({type: 'confirmpassword', password: password.value});
  const name = useForm({type: 'text'});
  const lastName = useForm({type: 'text'});

  function handleSubmit(e) {
    e.preventDefault();

    const users = JSON.parse(getValue('users')) || [];
      
    if (!users.some((user) => user.email === email.value) && email.validate() && password.validate() && confirmPassword.validate() && name.validate() && lastName.validate()) {
      users.push({email: email.value, password: password.value, name: name.value, lastName: lastName.value, addresses: [], orders: []})

      setValue('users', JSON.stringify(users));
      setError('');
      setAccountCreated(true);
    } else if (users.some((user) => user.email === email.value)) {
      setError('Email já cadastrado');
    }
  }

  function handleClick() {
    email.setValue('');
    password.setValue('');
    confirmPassword.setValue('');
    name.setValue('');
    lastName.setValue('');
    setAccountCreated(false);
  }

  if (!accountCreated)
  return (
    <RegisterWrapper>
      <h2>Crie sua conta</h2>

      <form onSubmit={handleSubmit}>
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="text" name="password" {...password} />
        <Input label="Confirmar senha" type="text" name="password" {...confirmPassword} />
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Sobrenome" type="text" name="lastname" {...lastName} />

        <ButtonAccount>Registrar</ButtonAccount>
      </form>
      {error && <p>{error}</p>}
    </RegisterWrapper>
  )

  if (accountCreated)
  return (
    <RegisterWrapper>
      <h2>Conta criada com sucesso</h2>
      <ButtonAccount onClick={handleClick}>Voltar</ButtonAccount>
    </RegisterWrapper>
  )
}

export default RegisterAccount