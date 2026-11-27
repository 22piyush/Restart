
import React, { useState } from "react";
import User from "./User";

const App = () => {

  const [name, setName] = useState("Piyush");

  return (
    <div>
      <User name={name}/>
    </div>
  );
}

export default App;