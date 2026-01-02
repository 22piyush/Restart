import React from 'react'
import { useState, useEffect } from 'react';

function App() {


    return (
        <>
            <div>
                <h3>🫰 Expense Tracker</h3> 
                <div>
                    <form>
                        <input type='text' placeholder='Expense Title' />
                        <input type='text' placeholder='Amount' />
                        <button type='submit'>Add Expense</button>
                    </form>
                   <div>
                    <h3>Total Expense: Rs {750.00}</h3>
                    <div>
                        <div><span>Internet Charges Rs. {500}</span></div>
                        <div><span>Train Ticket Rs. {700}</span></div>
                    </div>
                   </div>
                </div> 
            </div>   
        </>
    )
}

export default App