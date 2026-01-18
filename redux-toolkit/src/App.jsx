import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [number, setNumber] = useState(5);

  return (
    <div>
      <h1>{ count }</h1>

      <button onClick={()=>{ dispatch(increment()) }}>Increment</button>
      <button onClick={()=>{ dispatch(decrement()) }}>Decrement</button>


      <input type="number" value={number} onChange={(e) => {setNumber(e.target.value)}}/>

       <button onClick={()=>{ dispatch(incrementByAmount(Number(number))) }}>Increment by {number}</button>
    </div>
  )
}

export default App