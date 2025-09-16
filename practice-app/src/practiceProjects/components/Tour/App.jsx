import React from 'react'
import Tour from './Tour'
import {data} from './Data'

function App() {
  return (
    <div>
        <Tour tour={data}/>
    </div>
  )
}

export default App