import React from 'react'
import Count from './components/Count'
import { useDispatch } from 'react-redux'

function App() {

    const dispatch = useDispatch()

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}

export default App