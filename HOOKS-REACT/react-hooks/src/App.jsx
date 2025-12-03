import { useState } from "react";

function App() {

  const [fruit, setFruit] = useState(true);

  return (
    <div>
      <h1>{fruit}</h1>
      <button onClick={()=>setFruit(!fruit)}>Burron</button>
      {
         fruit ? <h1>Piyush</h1> : null
      }
    </div>
  );
}

export default App;
