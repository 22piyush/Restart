import React from "react";

function VT({list}) {
  return (
    <div>
      {list.map((item) => {
        return <p key={item}>item - {item}</p>;
      })}
    </div>
  );
}

export default VT;
