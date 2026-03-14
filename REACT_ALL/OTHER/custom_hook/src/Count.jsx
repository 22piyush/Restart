import React, { useMemo, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const expensiveTask = () => {
    for (let i = 1; i < 200000; i++) {}
  };

  const expensiveResult = useMemo(() => {
    const result = expensiveTask();
    return result;
  }, [count]);

  expensiveTask();

  return <div>Count</div>;
}

export default Count;
