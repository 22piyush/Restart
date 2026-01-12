import React from "react";
import Greeting from "./Greeting";
import GreetingWithStyle from "./GreetingWithStyle";

// ABOUT Page
function Higher() {
  return (
    <div>
      <Greeting name={"Piyush"} />
      <GreetingWithStyle name="Sanchit"/>
    </div>
  );
}

export default Higher;
