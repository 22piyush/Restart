import React, { useMemo, useState } from "react";
import WithoutMemo from "./WithoutMemo";
import Memo from "./Memo";

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Running..............");

    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total = total + i;
    }

    return total + num;
  };

  const ressult = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      {/* <WithoutMemo/> */}

      <div>
        <h2>Result: {ressult}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <p>Count: {count}</p>
      </div>

      <div>
        Memo
        <Memo/>
      </div>
    </div>
  );
}

export default UseMemoHook;
