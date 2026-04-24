import React from "react";

function Practice() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };
  const result = expensiveCalculation(count);

  return (
    <div>
      <h1>Result : {result}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default Practice;
