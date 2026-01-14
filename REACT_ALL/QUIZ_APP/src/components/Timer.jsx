import React from 'react'

function Timer({time}) {
  return (
    <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Question 1 / 10</h5>
            <span className="badge bg-danger fs-6">
            ⏱ {time}
            </span>
        </div>
    </div>
  )
}

export default Timer