import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({expenses, ondelete}) {
    if(expenses.length == 0){
      return <p>No Expenses Found</p>
    }
  return (
    <div>
        {expenses.map((item) => (
            <ExpenseItem key={item.id} item={item} ondelete={ondelete}/>
        ))}
    </div>
  )
}

export default ExpenseList