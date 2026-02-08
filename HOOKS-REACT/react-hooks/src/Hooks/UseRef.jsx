import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(0); 
  // State can Persist the value.

  const countRef = useRef(0);

  let counter = 0;

  const handleIncrement = () => {
    setCount(count + 1);

    countRef.current += 1;
    console.log(countRef.current, "REF");

    counter += 1;
    console.log(counter, "Counter");
  };

  useEffect(() => {
    console.log("re Render hua hai");
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default UseRef;
