import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setLoggedIn = props.setIsLoggedIn;

  return (
    <div>
        <div className='flex justify-between items-center p-4'>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div className='flex justify-between items-center gap-5 list-none'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </div>
            <div >
                <button>Login</button>
                <button>Sign Up</button>
                <button>Log Out</button>
                <button>Dashboard</button>yukukiuk
                dglmgerogmerpiogv
            </div>
        </div>
    </div>
  )
}

export default Navbar