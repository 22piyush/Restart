import React, { useState } from 'react'

function UseCallback() {
    
 const [count, setCount] = useState(0);


  return (
    <div>
        <div>Count : {count}</div>
        <div>
            <button> Increment </button>
        </div>
    </div>
  )
}

export default UseCallback