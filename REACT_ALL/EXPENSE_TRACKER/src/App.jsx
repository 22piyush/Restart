import React from 'react'
import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {

    const [expense, setExpense] = useState([]);

    return (
        <>
            <div>
                <h2>🫰 Expense Tracker</h2> 
                <ExpenseForm />  
                <div>
                    <h3>Total Expense: Rs {750.00}</h3>
                    <ExpenseList />
                </div>
            </div>   
        </>
    )
}

export default App