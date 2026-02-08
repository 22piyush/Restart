import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef();

  const handleFocus = () => {};

  return (
    <div>
      <input type="text" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default UseRef;
