import React from "react";

function VT({list, height, itemHeight}) {

    const noOfvisibleItems = Math.floor((height / itemHeight))

  return (
    <div style={{
        height: `${height}px`,
        overflowY:'auto'
    }}>
      {list.map((item) => {
        return <p key={item}>item - {item}</p>;
      })}
    </div>
  );
}

export default VT;
