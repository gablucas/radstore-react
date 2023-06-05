import React from 'react';
import { Error } from '../../global';


const Input = ({ label, type, placeholder, name, value, onChange, onBlur, error }) => {
  return (
    <div>
      <label htmlFor={name} >{label}</label>
      <input 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        />
        {error && <Error>{error}</Error>}

    </div>
  )
}

export default Input