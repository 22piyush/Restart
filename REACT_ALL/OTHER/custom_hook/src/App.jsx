import React, { useState } from 'react'
import VT from './VT';


function App() {

  const arr = Array.from({length:800}, (_,index)=> index + 1);
  console.log(arr);
  

  return (
    <div>

      <VT list={arr}/>
      
    </div>
  )
}

export default App