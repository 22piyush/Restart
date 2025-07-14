import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
  return (
    <div>
        {/* <Navbar/> */}
        <button onClick={()=>{navigate(-1) }}>Go Back page</button>
        About

    </div>
  )
}

export default About