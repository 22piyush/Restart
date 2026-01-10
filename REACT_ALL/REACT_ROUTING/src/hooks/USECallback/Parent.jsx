import { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
     console.log("Btn Clicked");
  }, []);
// count
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}>Parent Btn</button>

      <Child click={handleClick}/>
    </div>
  );
}

export default Parent;
