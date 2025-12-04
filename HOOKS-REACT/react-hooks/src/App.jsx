import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Multiple conditions in React</h1>
        <button onClick={()=>setCount(count + 1)}>Counter</button>
        {
           count == 0?<h1>Condition 0</h1>
           :count == 17?<h1>Condition 1</h1>
           :<h1>Other Condition</h1>
        }
    </div>
  );
}

export default App;
