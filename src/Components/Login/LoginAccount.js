import React from 'react'
import { ButtonAccount, LoginWrapper } from './styles';
import Input from '../Forms/Input';
import useForm from '../../hooks/useForm';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context';


const LoginAccount = () => {
  const { setLoggedUser } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  
  const email = useForm('email');
  const password = useForm('password');

  function handleSubmit(e) {
    e.preventDefault();

    const users = JSON.parse(getValue('users')) || [];
    const user = users.find((user) => user.email === email.value && user.password === password.value);

    if (user) {
      setError('');
      setValue('loggeduser', JSON.stringify(user));
      setLoggedUser(user);
      navigate('/');
    } else {
      setError('Email ou senha incorretos');
    }
  }

  return (
    <LoginWrapper>
      <h2>Acessar sua conta</h2>
      
      <form onSubmit={handleSubmit}>
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="text" name="password" {...password} />

        <ButtonAccount>Entrar</ButtonAccount>
      </form>
      {error && <p>{error}</p>}
      
    </LoginWrapper>
  )
}

export default LoginAccount