import React, { useState } from 'react'
import Alpha from './Alpha'

function App() {

    const [count , setCount] = useState(0)
    
  return (
    <div>
        <Alpha/>
        <button onClick={()=>setCount(count + 1)}>Click:{count}</button>
    </div>
  )
}

export default App