import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';

//Step 1: create Context
const UserContext = createContext();
//Step 2: Wrap all the child inside a provider
//Step 3: Pass Value
//Step 4: consumer k andar jaake consume karlo

function Context() {

    const [user, setUser] = useState({name:"Piyush"});

  return (
    <>
        <UserContext.Provider value={user}>
            <ChildA/>
        </UserContext.Provider>
    </>
  )
}

export default Context
export {UserContext}