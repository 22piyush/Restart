import React from "react";
import useMyStore from "./store/store";

function App() {
  const store = useMyStore();

  const handleClick = () => {
    
    store.increment();
    
  };

  return (
    <div>
      App - {store.count}
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
