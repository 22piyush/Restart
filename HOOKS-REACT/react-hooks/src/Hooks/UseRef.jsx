import React, { useRef, useState } from "react";

function UseRef() {


    const [count, setCount] = useState(0);

    const handleIncrement =()=>{
        setCount(count + 1);
    }


  return (
    <div>
        <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default UseRef;
