import React from "react";
import Greeting from "./Greeting";
import GreetingWithStyle from "./GreetingWithStyle";
import PostListWithData from "./PostListWithDAta";

// ABOUT Page
function Higher() {
  return (
    <div>
      <Greeting name={"Piyush"} />
      <GreetingWithStyle name="Sanchit"/>
      <PostListWithData />
    </div>
  );
}

export default Higher;
