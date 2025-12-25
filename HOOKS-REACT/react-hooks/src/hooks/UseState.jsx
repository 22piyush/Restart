import React, { useState } from 'react'

function UseState() {

  const [student, setStudent] = useState({
    name: "Piyush",
    grade: "A",
    city: "Delhi"
  });

  const changeCity = () => {
    setStudent({...student, city: "Pune"})
  }

  return (
    <div>
        <h2>Name: {student.name}</h2>
        <p>Grade : {student.grade}</p>
        <p>City: {student.city}</p>

        <button onClick={changeCity}>Change City</button>
    </div>
  )
}

export default UseState