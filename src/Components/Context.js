
import React from 'react'
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import useProducts from '../hooks/useProducts';
export const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = React.useState();
  const [bgColor, setBgColor] = React.useState(true);
  const [cart, setCart] = React.useState([]);
  const [loggedUser, setLoggedUser] = React.useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkout, setCheckout] = React.useState({items: [], address: 0, payment: {subtotal: 0, shipping: 0, installments: 1}});
  const [toggleMenuMobile, setToggleMenuMobile] = React.useState(false);
  const { getValue, setValue } = useLocalStorage();
  const { products } = useProducts()

  const measures = {
    roupas: ["PP", "P", "M", "G", "GG", "38", "40", "42", "44", "46", "48", "50"],
    camisas: ["PP", "P", "M", "G", "GG"],
    camisetas: ["PP", "P", "M", "G", "GG"],
    moletons: ["PP", "P", "M", "G", "GG"],
    jaquetas: ["PP", "P", "M", "G", "GG"],
    calcas: ["38", "40", "42", "44", "46", "48", "50"],
    bermudas: ["38", "40", "42", "44", "46", "48", "50"],
    shorts: ["38", "40", "42", "44", "46", "48", "50"],
    calcados: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43"],
    longboard: ["27", "34", "38", "42", "44", "47", "48"],
    trucks: ["150mm 43°", "165mm 43°", "180mm 43°", "150mm 50°", "165mm 50°", "180mm 50°" ],
    rodas: ["62mm", "65mm", "70mm", "75mm", "80mm", "85mm", "105mm"],
    rolamentos: ["Único"],
    amortecedores: ["Único"]
  }

  React.useEffect(() => {
    const cartStorage = getValue('radstoreCart');

    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    } else {
      setValue('radstoreCart', [])
    }

  }, [setCart, getValue, setValue])

  React.useEffect(() => {
    const user = JSON.parse(getValue('radstoreLoggedUser'));

    if (user) {
      setLoggedUser(user)
    }

  }, [getValue])

  React.useEffect(() => {
    document.body.style.backgroundColor = bgColor ? '#FFFFFF' : "#F7F7F7";
  }, [bgColor])

  return (
    <GlobalContext.Provider value={{products, bgColor, setBgColor, loggedUser, setLoggedUser, filteredProducts, setFilteredProducts, searchParams, setSearchParams, measures, cart, setCart, checkout, setCheckout, toggleMenuMobile, setToggleMenuMobile}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider