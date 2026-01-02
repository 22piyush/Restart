import React from 'react'
import { useState, useEffect } from 'react'

function ExpenseForm() {
  return (
    <div>
        <form>
            <input type='text' placeholder='Expense Title' />
            <input type='text' placeholder='Amount' />
            <button type='submit'>Add Expense</button>
        </form>
    </div>
  )
}

export default ExpenseForm