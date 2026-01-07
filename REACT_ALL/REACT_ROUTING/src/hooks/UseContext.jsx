import React, { useState } from 'react'
// import ThemeContext from '../context_example/ThemeContext';
// import Toolbar from '../context_example/Toolbar';


import Navbar from '../context_example/Auth_Example/Navbar'
import { AuthProvider } from '../context_example/Auth_Example/AuthContext'

function UseContext() {

  return (
    <div>
        <AuthProvider>
            <Navbar/>
        </AuthProvider>
    </div>
  )
}

export default UseContext


// function UseContext() {

//     const [theme, setTheme] = useState("light");

//     return (
//         <>
//             <ThemeContext.Provider value={{theme, setTheme}}>
//                 <Toolbar/>
//             </ThemeContext.Provider>
//         </>
//     )
// }


// export default UseContext;





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