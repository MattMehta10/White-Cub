import React, { createContext, useContext } from 'react'

const MyContext= createContext()
const Wrapper = ({children}) => {
    const contextData={}
  return (
    <MyContext.Provider value={contextData}>
        {children}
    </MyContext.Provider>
  )
}

export default Wrapper