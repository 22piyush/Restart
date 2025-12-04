import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Multiple conditions in React</h1>
        <button onClick={()=>setCount(count + 1)}>Counter</button>
        {
           
        }
    </div>
  );
}

export default App;
