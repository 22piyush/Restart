import React from 'react'

function Header() {
  return (
    <div>
        <header>
           <h4>React Router</h4>
            <nav>
               <Link to={"/"}>Home</Link>
               <Link to={"/about"}>About</Link>
               <Link to={"/contact"}>Contact</Link>
               <Link to={"/user"}>User</Link>
            </nav>
        </header>
    </div>
  )
}

export default Header