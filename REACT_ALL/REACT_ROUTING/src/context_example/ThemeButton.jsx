import { useContext } from 'react'
import ThemeContext from '../context_example/ThemeContext';

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

export default ThemeButton;