import React, { useState } from 'react'

function UseCallback() {
    
 const [count, setCount] = useState(0);

 function handleClick() {
    setCount(count + 1);
 }

  return (
    <div>
        <h1>Use Call Back</h1>
        <div>Count : {count}</div>
        <div>
            <button onClick={handleClick}> Increment </button>
        </div>
    </div>
  )
}

export default UseCallback