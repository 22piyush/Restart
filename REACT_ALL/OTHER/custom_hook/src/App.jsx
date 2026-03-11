import React from "react";
import { useCounter } from "./customHook/useCounter";

function App() {
  const { count, increment, decrement} = useCounter(0);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
      <button>Set Value</button>
    </div>
  );
}

export default App;
