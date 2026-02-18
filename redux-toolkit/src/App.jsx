import React, { useEffect, useRef, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  // const countRef = useRef(0);

  let countvar = 0;

  const handleFocus = () => {
    setCount(count + 1);
    // countRef.current += 1;
    // console.log(countRef.current);

    console.log(countvar += 1);
    
    
  };
  
  useEffect(()=>{
    console.log("Re Render Huva hai");
  });

  return (
    <div>
      {/* <h1>{countRef.current}</h1> */}
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default App;
