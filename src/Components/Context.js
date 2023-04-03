import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = React.useState(false);
  const [data, setData] = React.useState();
  const [filteredData, setFilteredData] = useState()
  const [searchParams, setSearchParams] = useSearchParams();
  const [cartQuantity, setCartQuantity] = React.useState(0);

  const measures = {
    camisas: ["PP", "P", "M", "G", "GG"],
    camisetas: ["PP", "P", "M", "G", "GG"],
    moletons: ["PP", "P", "M", "G", "GG"],
    calcas: ["38", "40", "42", "44", "46", "48", "50"],
    bermudas: ["38", "40", "42", "44", "46", "48", "50"],
    boardshorts: ["38", "40", "42", "44", "46", "48", "50"],
    tenis: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
  }


  return (
    <GlobalContext.Provider value={{loggedUser, setLoggedUser, data, setData, filteredData, setFilteredData, searchParams, setSearchParams, measures, cartQuantity, setCartQuantity}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider