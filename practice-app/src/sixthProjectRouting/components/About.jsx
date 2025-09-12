import React from 'react'
import { useNavigate } from 'react-router-dom'


function About() {

  const navigate = useNavigate();

  function clickHandler(){
    navigate('/')
  }

  return (
    <div>
      About

      <button onClick={clickHandler}>Move to Home Page</button>
       <button onClick={() => navigate(-1)}>Go Back</button>

    </div>
  )
}

export default About