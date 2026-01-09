import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header style={{height:'60px',background:'gray',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0px 20px 0px 20px'}}>
            <nav style={{display:'flex',gap:'30px'}}>
               <Link to={"/"}>Home</Link>
               <Link to={"/in/user/about"}>About</Link>
               <Link to={"/contact"}>Contact</Link>
               <Link to={"/context"}>Use Context Hook</Link>
               <Link to={"/hooks"}>Hooks</Link>
               <Link to={"/user"}>User</Link>
               <Link to={"/feature"}>feature</Link>
            </nav>
        </header>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}

export default Header