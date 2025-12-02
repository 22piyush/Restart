import React, { createContext, useState } from 'react'
const DataContext = createContext();
export default function ContextApi({children}) {

  const [data,setData] = useState("Code ki pathashala");

  return (
    <DataContext.Provider value={{data,setData}}>
        {children}       
    </DataContext.Provider>
  )
}

export {DataContext}