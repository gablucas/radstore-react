import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = React.useState();
  const [filteredData, setFilteredData] = useState()
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <GlobalContext.Provider value={{data, setData, filteredData, setFilteredData, searchParams, setSearchParams}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider