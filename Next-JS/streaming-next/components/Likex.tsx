
import { useState } from "react"

// async
const Likex = () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000))

  const [count , setCount] = useState(0)

  return (
    <div>Likex - {count}</div>
  )
}

export default Likex