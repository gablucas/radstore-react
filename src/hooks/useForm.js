import React from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 dígito. Com no mínino 8 caracteres.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números'
  },
  text: {
    regex: /^\D+$/,
    message: "Utilize apenas letras"
  }
}

const useForm = ({ type, password, empty, regex }) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState();

  function validate(value) {
    if(type === false) return true;

    if(type === 'confirmpassword' && value !== password) {
      setError('As senhas não estão iguais')
      return false;
    }else if(empty && value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (regex && types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }

}

export default useForm