import { useContext } from "react"
import { DataContext } from "./ContextApi/ContextApi"


function App() {
  
  const contextData = useContext(DataContext);
  console.log(contextData);
  
  return (
    <>
      <div>{contextData.data}</div>
    </>
  )
}

export default App