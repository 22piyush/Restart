import React from 'react'
import { createContext, useContext } from 'react'

const UserContext = createContext();

function UseContext() {

 const user = "Piyush Aglawe"

  return (
    <>
        <UserContext.Provider value={user}>
            <Parent/>
        </UserContext.Provider>
    </>
  )
}

function Parent() {
    const user = useContext(UserContext);
    return (<div><Child/> <h3>Name is {user}</h3></div>)
}

function Child (){
    return <GrandChild/>
}

function GrandChild(){
    const user = useContext(UserContext);
    return <h3>Name is {user}</h3>
}

export default UseContext