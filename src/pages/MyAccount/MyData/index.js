import React from 'react';
import { Container } from './styles';
import Input from '../../../components/Forms/Input';
import useForm from '../../../hooks/useForm';
import { GlobalStyle } from '../../../global';  
import useLocalStorage from '../../../hooks/useLocalStorage';
import { GlobalContext } from '../../../components/Context';

const MyData = () => {
  const { loggedUser } = React.useContext(GlobalContext)
  const { getValue, setValue } = useLocalStorage();


  const name = useForm({type: 'text', empty: false, regex: true});
  const lastName = useForm({type: 'text', empty: false, regex: true});
  const email = useForm({type: 'email', empty: false, regex: true});
  const birth = useForm({type: 'number', empty: false, regex: true});
  const phone = useForm({type: 'number', empty: false, regex: true});
  const cpf = useForm({type: 'number', empty: false, regex: true});

  const currentPassword = useForm({type: false, empty: false, regex: false})
  const newPassword = useForm({type: 'password', empty: false, regex: false});
  const confirmNewPassword = useForm({type: 'confirmpassword', password: newPassword.value, empty: false, regex: false});

  function handleChangeData() {
    const user = loggedUser;
    let didAnyDataChange = false;

    if (name.value && name.validate()) {
      didAnyDataChange = true;
      user.name = name.value;
      name.setValue('')
    }

    if (lastName.value && lastName.validate()) {
      didAnyDataChange = true;
      user.lastName = lastName.value;
      lastName.setValue('')
    }

    if (email.value && email.validate()) {
      didAnyDataChange = true;
      user.email = email.value;
      email.setValue('')
    }

    if (birth.value && birth.validate()) {
      didAnyDataChange = true;
      user.birth = birth.value;
      birth.setValue('')
    }

    if (phone.value && phone.validate()) {
      didAnyDataChange = true;
      user.phone = phone.value;
      phone.setValue('')
    }

    if (cpf.value && cpf.validate()) {
      didAnyDataChange = true;
      user.cpf = cpf.value;
      cpf.setValue('')
    }

    if (didAnyDataChange) {
      const users = JSON.parse(getValue('radstore')).map((m) => {
        if (m.email === user.email) {
          return user;
        }
        return m;
      })
      
      setValue('radstoreLoggedUser', JSON.stringify(user));
      setValue('radstore', JSON.stringify(users));
      window.location.reload();
    }
  }

  function handleChangePassword() {

  }

  return (
    <Container>
      <h1>Meus dados</h1>
      
      <div>
        <Input label="Nome" type='text' name='name' placeholder={loggedUser?.name} {...name} />
        <Input label="Sobrenome" type='text' name='lastname' placeholder={loggedUser?.lastName} {...lastName} />
        <Input label="Email" type='text' name='email' placeholder={loggedUser?.email} {...email}  />
        <Input label="Nascimento" type='text' name='birth' placeholder={loggedUser?.birth} {...birth}  />
        <Input label="Telefone" type='number' name='phone' placeholder={loggedUser?.phone} {...phone}  />
        <Input label="CPF" type='number' name='cpf' placeholder={loggedUser?.cpf} {...cpf}  />
        <button onClick={handleChangeData}>Salvar alterações</button>
      </div>

      <div>
        <Input label="Senha atual" type='text' name='currentpassword' {...currentPassword} />
        <Input label="Nova senha" type='text' name='newpassword' {...newPassword} />
        <Input label="Confirmar nova senha" type='text' name='confirmnewpassword' {...confirmNewPassword} />
        <button onClick={handleChangePassword}>Alterar senha</button>
      </div>

      <GlobalStyle color={true}/>
    </Container>
  )
}

export default MyData