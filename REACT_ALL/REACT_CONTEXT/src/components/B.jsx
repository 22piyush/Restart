import React, { useContext } from "react";
import { MyContext } from "../Hooks/MyContext";

function B() {

  const data = useContext(MyContext);

  return <div>B - {data}</div>;
}

export default B;
