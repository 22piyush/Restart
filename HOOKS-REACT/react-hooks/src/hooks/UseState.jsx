import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={increase}>Increase</button>
    </div>
  )
}

export default UseState