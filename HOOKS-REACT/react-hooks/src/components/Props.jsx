import React from 'react'

function Props(prop) {

  return (
   <div>
     <div>{
        prop.fruit.map((prop, index) => (
            <li  key={index}>{index} - {prop}</li>
        ))}</div>

        <div>{prop.newName}</div>
   </div>
  )
}

export default Props