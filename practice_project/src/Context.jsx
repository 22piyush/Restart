import React, { createContext } from 'react'
import ChildA from './components/ChildA';

//Step 1: create Context
const UserContext = createContext();

//Step 2: Wrap all the child inside a provider
function Context() {
  return (
    <div>
        <ChildA/>
    </div>
  )
}

export default Context