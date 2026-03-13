import React, { useState } from 'react'
import Alpha from './Alpha'

function App() {

    const [count , setCount] = useState(0)
    
  return (
    <div>
        <Alpha count={count}/>
        <button onClick={()=>setCount(count + 1)}>Click</button>
    </div>
  )
}

export default App