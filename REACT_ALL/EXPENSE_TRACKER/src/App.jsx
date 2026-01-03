import React from 'react'
import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {

    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses((prev)=>[...prev, expense])
    }

    const deleteExpense = (id) => {
        
    }


    return (
        <>
            <div>
                <h2>🫰 Expense Tracker</h2> 
                <ExpenseForm  onAddExpense={addExpense}/>  
                <div>
                    <h3>Total Expense: Rs {750.00}</h3>
                    <ExpenseList expenses={expenses} ondelete={deleteExpense}/>
                </div>
            </div>   
        </>
    )
}

export default App