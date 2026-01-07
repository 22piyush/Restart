import React, { useState } from 'react'
import { createContext, useContext } from 'react'

const ThemeContext = createContext();

function UseContext() {

    const [theme, setTheme] = useState("light");

    return (
        <>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <Toolbar/>
            </ThemeContext.Provider>
        </>
    )
}

function Toolbar() {
    return (<div><ThemeButton/></div>)
}

function ThemeButton (){

    const {theme, setTheme} = useContext(ThemeContext);

    return(
        <button 
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        style={{
            backgroundColor:theme == "light" ? "#ffffff" : "#333",
            color:theme == "light" ? "#333" : "#ffffff"
        }}
        >Current Theme: {theme}</button>
    )
}


export default UseContext;









// import React from 'react'
// import { createContext, useContext } from 'react'

// const UserContext = createContext();

// function UseContext() {

//  const user = {
//     name:"Piyush",
//     role:"Admin"
//  }

//   return (
//     <>
//         <UserContext.Provider value={user}>
//             <Parent/>
//         </UserContext.Provider>
//     </>
//   )
// }

// function Parent() {
//     const user = useContext(UserContext);
//     return (<div> <h3>Name is {user.name}</h3> <Child/></div>)
// }

// function Child (){
//     return <GrandChild/>
// }

// function GrandChild(){
//     const user = useContext(UserContext);
//     return <h3>Name is {user.role}</h3>
// }

// export default UseContext;