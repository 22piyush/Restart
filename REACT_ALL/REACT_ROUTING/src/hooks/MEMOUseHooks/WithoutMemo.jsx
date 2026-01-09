import React, { useState } from 'react'

function WithoutMemo() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveCalculation = () => {
        console.log("Running..............");
        
        let total = 0;
        for(let i=0; i<1000000000; i++){
            total = total + i;
        }

        return total;
    }

    const ressult = expensiveCalculation();

  return (
    <div>
        <h2>Result: {ressult}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>

        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>

        <p>Count: {count}</p>
    </div>
  )
}

export default WithoutMemo