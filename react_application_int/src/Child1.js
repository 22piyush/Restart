import React from 'react'

function Child1({name}) {
  return (
    <div>{name}</div>
  )
}

export default React.memo(Child1);