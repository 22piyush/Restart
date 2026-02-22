import React from "react";
import useMyStore from "./store/store";

function App() {
  const store = useMyStore();

  return <div>App - {store.count}</div>;
}

export default App;
