import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Labs() {

    // Navigate Hook
    const navigate = useNavigate();
  return (
    <div>
        {/* <Navbar/> */}
        Labs

        <button onClick={()=>{navigate("/about") }}>Move to about page</button>
    </div>
  )
}

export default Labs