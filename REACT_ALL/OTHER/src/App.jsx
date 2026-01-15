import { createPortal } from "react-dom"

function App() {
  return (
    <div>
        <h1>App Component</h1>
        { createPortal( <h1>Portal</h1>, document.body ) }
    </div>
  )
}

export default App