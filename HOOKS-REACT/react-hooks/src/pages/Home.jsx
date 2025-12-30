import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  const goToAbout =()=>{
    navigate("/about");
  }

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  )
}

export default Home