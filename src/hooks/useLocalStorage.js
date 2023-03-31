import React from 'react'

const useLocalStorage = () => {
  
  function setValue(key, value) {
    localStorage.setItem(key, value)
  }

  function getValue(key, value) {
    return localStorage.getItem(key, value)
  }




  return { setValue, getValue };
}

export default useLocalStorage