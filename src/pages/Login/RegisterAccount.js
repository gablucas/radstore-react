import React from 'react'
import { ButtonAccount, RegisterWrapper } from './styles';
import Input from '../../components/Forms/Input';
import useForm from '../../hooks/useForm';
import useLocalStorage from '../../hooks/useLocalStorage';

const RegisterAccount = () => {
  const [error, setError] = React.useState(false);
  const [accountCreated, setAccountCreated] = React.useState(false);
  const { setValue, getValue } = useLocalStorage();

  const email = useForm({type: 'email', empty: true, regex: true});
  const password = useForm({type: 'password', empty: true, regex: true});
  const confirmPassword = useForm({type: 'confirmpassword', password: password.value, empty: true, regex: true});
  const name = useForm({type: 'text', empty: true, regex: true});
  const lastName = useForm({type: 'text', empty: true, regex: true});

  function handleSubmit(e) {
    e.preventDefault();

    const users = JSON.parse(getValue('radstore')) || [];
      
    if (!users.some((user) => user.email === email.value) && email.validate() && password.validate() && confirmPassword.validate() && name.validate() && lastName.validate()) {
      users.push({email: email.value, password: password.value, name: name.value, lastName: lastName.value, birth: '00/00/0000', cpf: '000.000.000-000', phone: '47 99999-9999', addresses: [], payment: [], orders: [], favorites: []})

      setValue('radstore', JSON.stringify(users));
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
        <Input label="Senha" type="password" name="password" {...password} />
        <Input label="Confirmar senha" type="password" name="password" {...confirmPassword} />
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