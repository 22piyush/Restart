import React, { useState } from 'react'
import TodoCard from './TodoCard'
import Todo from './Todo.jsx'

function TodoHandle() {

  const [todoData , setTodoData] = useState([])

  const addTodo = (val) =>{
    setTodoData([...todoData , val])
  }

  const removeTodo =(index)=>{
    const newList = todoData.filter((_,i) => i !== index);
    setTodoData(newList);
  }

  return (
    <div>
        <Todo addTodo={addTodo}/>
        <TodoCard removeTodo={removeTodo} todo={todoData}/>
    </div>
  )
}

export default TodoHandle