import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef();

  const handleFocus = () => {

    console.log(inputRef);
    inputRef.current.focus()
    

  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default UseRef;
