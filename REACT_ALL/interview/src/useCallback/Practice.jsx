import React, { useState } from "react";

const Child = ({ handleClick }) => {
  console.log("Child re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
};

function Practice() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

export default Practice;
