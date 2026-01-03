import React from 'react'
import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {

    const [expenses, setExpenses] = useState(()=>{
        const saved = localStorage.getItem("storage_expenses")
        return saved ? JSON.parse(saved) : []
    });

    useEffect(()=>{
        localStorage.setItem("storage_expenses", JSON.stringify(expenses))
    },[expenses]);

    const addExpense = (expense) => {
        setExpenses((prev)=>[...prev, expense])
    }

    const deleteExpense = (id) => {
        setExpenses(prev => prev.filter(expense => expense.id !== id))
    }

    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount , 0)


    return (
        <>
            <div>
                <h2>🫰 Expense Tracker</h2> 
                <ExpenseForm  onAddExpense={addExpense}/>  
                <div>
                    <h3>Total Expense: Rs {totalExpenses.toFixed(3)}</h3>
                    <ExpenseList expenses={expenses} ondelete={deleteExpense}/>
                </div>
            </div>   
        </>
    )
}

export default App