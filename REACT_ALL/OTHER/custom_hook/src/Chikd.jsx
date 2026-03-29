import React from "react";

function Chikd() {
  console.log("Child render");

  return <div>Chikd</div>;
}

export default React.memo(Chikd);
