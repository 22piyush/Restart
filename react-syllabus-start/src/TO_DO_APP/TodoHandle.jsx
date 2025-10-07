import React, { useState } from 'react'
import Todo from './Todo'
import TodoCard from './TodoCard'

function TodoHandle() {

  const [todoData , setTodoData] = useState([])

  const addTodo = (val) =>{
    console.log(val);
    
  }

  const removeTodo =()=>{

  }

  return (
    <div>
        <Todo addTodo={addTodo}/>
        <TodoCard removeTodod={removeTodo} todo={todoData}/>
    </div>
  )
}

export default TodoHandle