import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [count, setCount] = useState(0);

   useEffect(()=>{
        console.log("Component Re-rendered!");
   }) 

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count + 1)}>Click</button>
    </div>
  )
}

export default UseEffect