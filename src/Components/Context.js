import React, { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [bgColor, setBgColor] = React.useState(true);
  const [cartStorage, setCartStorage] = React.useState();
  const [cart, setCart] = React.useState();
  const [loggedUser, setLoggedUser] = React.useState();
  const [data, setData] = React.useState();
  const [filteredData, setFilteredData] = useState()
  const [searchParams, setSearchParams] = useSearchParams();
  const [cartQuantity, setCartQuantity] = React.useState(0);
  const [selectedAddress, setSelectedAddress] = React.useState();
  const [selectedPayment, setSelectedPayment] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState();
  const [shipping, setShipping] = React.useState(0);
  const [installments, setInstallments] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const order = useRef({});

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
    const user = JSON.parse(window.localStorage.getItem('loggeduser'));

    if (user) {
      setLoggedUser(user)
    }

  }, [])

  React.useEffect(() => {
    setCartQuantity(JSON.parse(window.localStorage.getItem('cart'))?.length || 0)
  }, [])

  React.useEffect(() => {
    console.log(bgColor)
    document.body.style.backgroundColor = bgColor ? '#FFFFFF' : "#F7F7F7";
  }, [bgColor])


  return (
    <GlobalContext.Provider value={{bgColor, setBgColor, loggedUser, setLoggedUser, data, setData, filteredData, setFilteredData, searchParams, setSearchParams, measures, cartQuantity, setCartQuantity, cart, setCart, cartStorage, setCartStorage, selectedAddress, setSelectedAddress, selectedPayment, setSelectedPayment, selectedCard, setSelectedCard, shipping, setShipping, installments, setInstallments, total, setTotal, order}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider