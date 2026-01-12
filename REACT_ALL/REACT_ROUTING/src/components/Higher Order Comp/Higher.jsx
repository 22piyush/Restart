import React from "react";
import Greeting from "./Greeting";
import GreetingWithStyle from "./GreetingWithStyle";
import PostListWithData from "./PostListWithDAta";
import Dashboard from "./Auth/Dashboard";
import WithAuth from "./Auth/WithAuth";

const ProtectedDashboard = WithAuth(Dashboard)


// ABOUT Page
function Higher() {
  return (
    <div>
      <Greeting name={"Piyush"} />
      <GreetingWithStyle name="Sanchit"/>
      <ProtectedDashboard />
      <PostListWithData />
    </div>
  );
}

export default Higher;
