
import React from 'react'
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { api } from '../services/api';
export const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState()
  const [bgColor, setBgColor] = React.useState(true);
  const [cart, setCart] = React.useState([]);
  const [loggedUser, setLoggedUser] = React.useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { getValue, setValue } = useLocalStorage();
  const [checkout, setCheckout] = React.useState({order: [], address: 0, payment: {subtotal: 0, shipping: 0, installments: 0}});

  const measures = {
    camisas: ["PP", "P", "M", "G", "GG"],
    camisetas: ["PP", "P", "M", "G", "GG"],
    moletons: ["PP", "P", "M", "G", "GG"],
    calcas: ["38", "40", "42", "44", "46", "48", "50"],
    bermudas: ["38", "40", "42", "44", "46", "48", "50"],
    boardshorts: ["38", "40", "42", "44", "46", "48", "50"],
    tenis: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
  }

  React.useEffect(() => {
    const cartStorage = getValue('cart');

    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    } else {
      setValue('cart', [])
    }

  }, [setCart, getValue, setValue])

  
  React.useEffect(() => {
    api.get('data.json').then(response => setProducts(response.data));
  }, [])

  React.useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('loggeduser'));

    if (user) {
      setLoggedUser(user)
    }

  }, [])

  React.useEffect(() => {
    document.body.style.backgroundColor = bgColor ? '#FFFFFF' : "#F7F7F7";
  }, [bgColor])


  return (
    <GlobalContext.Provider value={{bgColor, setBgColor, loggedUser, setLoggedUser, filteredProducts, setFilteredProducts, searchParams, setSearchParams, measures, cart, setCart, checkout, setCheckout, products, setProducts}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider