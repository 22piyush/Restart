import { useState, useCallback } from "react";

const Child = ({ handleClick }) => {
  console.log("Child re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
};

function ProperCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

export default ProperCallback;
