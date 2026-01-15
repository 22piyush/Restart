// import { createPortal } from "react-dom"
import { useState } from "react"

// import PortalTest from "./PortalTest"
import Model from "./Model";
import UserProfile from "./Error Boundries/UserProfile";
import ErrorBoundry from "./Error Boundries/ErrorBoundry";

function App() {

    const [open, setOpen] = useState(false);

    const userData = {
      name: "John Doe",
      age: 25
    }

    const userData1 = null;

  return (
    <div>
      <div>
        <h1>App Component</h1>
        {/* { createPortal( <h1>Portal</h1>, document.body ) } */}
        {/* <PortalTest/> */}

        <button onClick={() => setOpen(true)}>Open Modal</button>

        <Model isOpen={open} onClose={() => setOpen(false)}>
            <h2>Hello from Modal</h2>
            <p>This is a simple modal without context.</p>
        </Model>
      </div>

      <div style={{marginTop:"50px"}}>
        {/* Error Boundries  */}

        <ErrorBoundry>
          <UserProfile userData={userData}/> 
        </ErrorBoundry>

        <ErrorBoundry fallback={<p>Error in user Profile</p>}>
          <UserProfile userData={userData1}/> 
        </ErrorBoundry>

      </div>
  
    </div>
  )
}

export default App