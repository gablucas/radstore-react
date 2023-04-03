import React, { useContext } from 'react'
import { GlobalContext } from '../components/Context'
import useLocalStorage from './useLocalStorage';

const useLogged = () => {
  const { getValue } = useLocalStorage();
  const { setLoggedUser, setCartQuantity } = useContext(GlobalContext);

  React.useEffect(() => {
    const user = JSON.parse(getValue('loggeduser'));
    
    if (user) {
      setLoggedUser(user)
    }
  }, [getValue, setLoggedUser])

  React.useEffect(() => {
    setCartQuantity(JSON.parse(getValue('cart')).length)
  }, [getValue, setCartQuantity])


}

export default useLogged;