import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <div style={{backgroundColor:"gray", width:"100%", display:"flex", gap:"20px"}}>   
                <h4>Movie Explorer</h4>
                <p>Home</p>
            </div>
        </div>
    )
}

export default Header;