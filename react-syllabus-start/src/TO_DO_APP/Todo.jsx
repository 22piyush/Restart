import React from 'react'

function Todo({addTodo}) {
    const [input , setInput] = React.useState("")

  return (
    <div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={()=>{addTodo(input)}}>Submit</button>
    </div>
  )
}

export default Todo