import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const renderCountRef = useRef(0);
  // State can Persist the value.

  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const no = Math.random();
    setRandomNumber(no);
  };

  useEffect(() => {
    console.log("Re Render Triggred");
    renderCountRef.current += 1;
    setTimeout(() => {
      console.log("Tineout");
    }, 1000);
  });

  return (
    <div>
      <h1>{randomNumber}</h1>
      <h1>Re Render Count {renderCountRef.current}</h1>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
}

export default UseRef;
