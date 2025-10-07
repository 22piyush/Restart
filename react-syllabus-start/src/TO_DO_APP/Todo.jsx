import React, { useState } from 'react'

function Todo(addTodo) {

    const [input , setInput] = useState("")

  return (
    <div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onSubmit={()=>addTodo(input)}>Submit</button>
    </div>
  )
}

export default Todo