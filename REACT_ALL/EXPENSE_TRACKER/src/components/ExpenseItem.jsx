import React from 'react'

function ExpenseItem({item, ondelete}) {
  return (
    <div>
        <span>{item.title}</span>
        <span>{item.amount}</span>
        <button onClick={() => ondelete(item.id)}>❌</button>
    </div>
  )
}

export default ExpenseItem