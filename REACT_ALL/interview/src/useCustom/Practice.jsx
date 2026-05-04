import React from "react";
import useCustom from "./useCustom";

function Practice() {
  const { count, increment, decrement, reset } = useCustom(10);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Practice;
