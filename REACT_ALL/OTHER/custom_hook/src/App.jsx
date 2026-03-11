import React from 'react'
import WithCardLook from './WithCardLook'
import WrappedComp from './WrappedComp';

function App() {
const WithCard = WithCardLook(WrappedComp);

  return (
    <div><WithCard/></div>
  )
}

export default App