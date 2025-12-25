import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text))
    if (text.trim() === "") return;
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
