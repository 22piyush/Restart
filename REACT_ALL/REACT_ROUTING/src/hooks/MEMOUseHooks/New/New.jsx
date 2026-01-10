import React, { useMemo, useState } from "react";

function New() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");

    for (let i = 0; i <= 100000000000; i++) {} // simulate heavy work
    return num * 2;
  }

  const result = useMemo(() => {
    return expensiveTask(input);
  }, [input]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>Count: {count}</div>

      <input
        type="number"
        placeholder="Enter Number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <h3>Result: {result}</h3>
    </div>
  );
}

export default New;
