// import { createPortal } from "react-dom"
import { useState } from "react"

// import PortalTest from "./PortalTest"
import Model from "./Model";
import UserProfile from "./Error Boundries/UserProfile";

function App() {

    const [open, setOpen] = useState(false);

    const userData = {
      name: "John Doe",
      age: 25
    }

  return (
    <div>
        <h1>App Component</h1>
        {/* { createPortal( <h1>Portal</h1>, document.body ) } */}
        {/* <PortalTest/> */}

        <button onClick={() => setOpen(true)}>Open Modal</button>

        <Model isOpen={open} onClose={() => setOpen(false)}>
            <h2>Hello from Modal</h2>
            <p>This is a simple modal without context.</p>
        </Model>



        {/* Error Boundries  */}
        <UserProfile userData={userData}/> 
    </div>
  )
}

export default App