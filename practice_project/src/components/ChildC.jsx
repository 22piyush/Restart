import React,{useContext} from 'react'
import { ThemeContext } from '../Context'


function ChildC() {

    // const user = useContext(UserContext);

    const {theme , setTheme}  = useContext(ThemeContext)
   

  return (
    <div>
        {/* {theme} */}
        <button onClick={() =>{
            console.log(theme);
            
        setTheme(theme === 'light' ? 'dark' : 'light');
    }}>Chnage Theme</button>
    </div>
  )
}

export default ChildC