import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';

//Step 1: create Context
// const UserContext = createContext();
//Step 2: Wrap all the child inside a provider
//Step 3: Pass Value
//Step 4: consumer k andar jaake consume karlo

const ThemeContext = createContext();

function Context() {

    // const [user, setUser] = useState({name:"Piyush"});
  const [theme, setTheme] = useState('light');
  return (
    // <>
    //     <UserContext.Provider value={user}>
    //         <ChildA/>
    //     </UserContext.Provider>
    // </>

    <>
        <ThemeContext.Provider value={{theme , setTheme}}>
            <div style={{backgroundColor:theme === 'light' ? 'beige' : 'black' , height : "100px" , width:'200px', display:'flex' , justifyContent:'center', alignItems:'center'}}>
                <ChildA/>
            </div>
        </ThemeContext.Provider>    

    </>
  )
}

export default Context
// export {UserContext}

export{ThemeContext}