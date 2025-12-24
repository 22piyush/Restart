import React, { useState } from 'react'

function UseMemo() {

    const [count , setCount] = useState(0);

    function expensiveTask(num){
        console.log("Inside Expensive Task");
        for(let i=0 ; i<=1000000000000000000000; i++){}
        return num * 2; 
    }

    let doubleValue = expensiveTask(4);

  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>Increment</button>

        <div>
            Count: {count}
        </div>

        <div>
            Double: {doubleValue}
        </div>

    </div>
  )
}

export default UseMemo