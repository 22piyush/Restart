import React, { useState } from 'react'

function Todo() {

    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);
    
    const handleSubmit =(e)=> {
        e.preventDefault();

        if(newTodo){
            setNewTodo([...todos , {text: e.target.value , completed: false}]);
            setNewTodo("");
        }
    }

    const handleDelete =(index) => {
        
    }

  return (
    <div>
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Add new todo' onChange={(e)=> setNewTodo(e.target.value)} value={newTodo}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
        <div>
            <ul>
                {
                    todos.map((todo, index) => {
                        <li key={index}>
                            <span>{todo.text}</span>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Todo