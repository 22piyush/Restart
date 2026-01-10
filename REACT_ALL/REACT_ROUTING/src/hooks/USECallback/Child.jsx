import React from "react";

function Child({ click }) {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={click}>Child Button</button>
    </div>
  );
}

export default React.memo(Child);
