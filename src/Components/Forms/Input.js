import React from 'react';

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
        {error && <p>{error}</p>}

    </div>
  )
}

export default Input