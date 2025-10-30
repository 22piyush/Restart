import React from 'react'

function TodoCard({removeTodo , todo}) {
  return (
    <div>
        <ul>
            {
                todo.map((item,index) => (
                    <li key={index}>
                        {item}
                        <button onClick={()=>{removeTodo(index)}}>X</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoCard