import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  // State can Persist the value.

  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const no = Math.random();
    setRandomNumber(no);
  };

  useEffect(() => {
    console.log("Re Render Triggred");
  });

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
}

export default UseRef;
