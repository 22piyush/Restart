import React, { useEffect } from "react";

function Alpha({ count }) {
  useEffect(() => {
    console.log("rendering......");
  });

  return <div>Alpha <h1>{count}</h1></div>;
}

export default Alpha;
