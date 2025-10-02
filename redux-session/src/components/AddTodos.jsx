import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodos() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo({ text: input })); 
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodos;
