import React, { useEffect, useEffectEvent, useState } from 'react'

function Home() {

  const [count , setCount] = useState(0);

  const onTick = useEffectEvent(() => {
    console.log("COUNT ", count);
    setCount(c=>c+1);
  })

  useEffect(()=>{
    console.log("Mount");
  
    const id = setInterval(() => {
      onTick();
    },1000)

    return () => {
      console.log("Unmount");
      clearInterval(id);
    }

  },[])

  return (
    <div>Home :- {count}</div>
  )
}

export default Home