// import { createPortal } from "react-dom"
import { useState } from "react"

import PortalTest from "./PortalTest"

function App() {

    const [open, setOpen] = useState(false);

  return (
    <div>
        <h1>App Component</h1>
        {/* { createPortal( <h1>Portal</h1>, document.body ) } */}
        <PortalTest/>

        <button onClick={() => setOpen(true)}>Open Modal</button>
    </div>
  )
}

export default App