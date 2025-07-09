import React, { useState } from 'react'

function App() {

  const [text,setText] = useState('');
  function changeHandler() {
    console.log(text); 
  }

  return (
    <div>
        <div>
          <input type="text" onChange={changeHandler}/>
        </div>
    </div>
  )
}

export default App