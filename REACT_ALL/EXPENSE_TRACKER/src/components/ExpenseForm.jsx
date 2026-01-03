import React from "react";
import { useState, useEffect, useRef } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return alert("Please fill all fields.");

    const newExpense = {
      id: Date.now(),
      // we use dirsct if name same of veriable and key
      title,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);

    setTitle("")
    setAmount("")

    titleRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
