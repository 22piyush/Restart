import React, { useRef } from "react";

function UseRef() {
  const boxRef = useRef();
  const isRound = useRef(false); // toggle flag

  const handleFocus = () => {
    if (!isRound.current) {
      boxRef.current.style.borderRadius = "50%";
    } else {
      boxRef.current.style.borderRadius = "0";
    }

    isRound.current = !isRound.current; // toggle value
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "300px",
          aspectRatio: "1/1",
          background: "red",
          transition: "0.3s"
        }}
      ></div>

      <button onClick={handleFocus}>Toggle Shape</button>
    </div>
  );
}

export default UseRef;
