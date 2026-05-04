import React from "react";
import { useAPI } from "./useAPI";

function Api() {
  const { data } = useAPI("https://jsonplaceholder.typicode.com/todos/");
console.log(data);

  return (
    <div>
      {data.map((item) => (
        <div style={{lineHeight:'30px'}} key={item.id}>{`${item.id} - ${item.title}`}</div>
      ))}
    </div>
  );
}

export default Api;
