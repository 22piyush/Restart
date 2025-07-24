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
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </div>
            <div>
                {!isLoggedIn && (
                    <>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                    </>
                )}

                {isLoggedIn && (
                    <>
                    <Link to="/dashboard"><button>Dashboard</button></Link>
                    <Link to="/"><button onClick={() => { setLoggedIn(false); alert('Logged Out'); }}>Log Out</button></Link>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar