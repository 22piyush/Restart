import React from "react";
import { useMyContext } from "../Hooks/MyContext";

function C() {
  const { setCount, count } = useMyContext();

  return (
    <div>
      C - <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default C;
