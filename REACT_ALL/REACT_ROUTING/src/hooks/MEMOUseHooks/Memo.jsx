import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);

  const user = useMemo(() => ({ name: "Piyush", age: 23 }), []);

  console.log("First");

  return (
    <div>
      Parent Copunt: {count}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>{" "}
      <Child user={user} />
    </div>
  );
}

const Child = React.memo(({ user }) => {
    console.log("Child Rendered");
    return <h3>User: {user.name}</h3> 
})

export default Memo;
