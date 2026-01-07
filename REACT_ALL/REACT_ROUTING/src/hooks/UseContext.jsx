import React from 'react'
import { createContext, useContext } from 'react'

const UserContext = createContext();

function UseContext() {

 const user = {
    name:"Piyush",
    role:"Admin"
 }

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
    return (<div> <h3>Name is {user.name}</h3> <Child/></div>)
}

function Child (){
    return <GrandChild/>
}

function GrandChild(){
    const user = useContext(UserContext);
    return <h3>Name is {user.role}</h3>
}

export default UseContext