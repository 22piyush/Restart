import React, { Children, useCallback, useState } from "react";
import Chikd from "./Chikd";

function App() {
  const [count, setCount] = useState(0);

  const[data, setData] = useState({
    nbame:'BNahgau'
  })


  const handleClick = useCallback(() => {
    console.log("mail click hua hun", count);
  }, [data]);

  console.log("Parent rendred");
  

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Here</button>

      <Chikd handleClick={handleClick} />
    </div>
  );
}

export default App;
