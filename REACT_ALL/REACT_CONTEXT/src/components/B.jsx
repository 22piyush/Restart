import React, { useContext } from "react";
import { useMyContext } from "../Hooks/MyContext";

function B() {
  const data = useMyContext();

  return <div>B - {data}</div>;
}

export default B;
