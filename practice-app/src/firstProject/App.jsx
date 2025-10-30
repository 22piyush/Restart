import React, { useState } from 'react'
import tourData from './Data'
import Tour from './Tour'

function App() {

  const [data , setData] = useState(tourData)

  function removeTour(id){
    const newData = data.filter(n => n.id != id)
    setData(newData)
  }
  return (
    <div>
      <Tour tours={data} removeTour={removeTour}/>
    </div>
  )
}

export default App