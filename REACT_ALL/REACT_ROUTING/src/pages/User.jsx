import React from 'react'
import { Link } from 'react-router-dom'

function User() {

  const userData = [
    {id:1, name:"Abhijit"},
    {id:2, name:"Piyush"},
    {id:3, name:"Dev"},
    {id:4, name:"Harshal"},
    {id:5, name:"Arth"}
  ]

  return (
    <div>
        <div>
          <h2>User List</h2>
          {userData.map((item) => (
              <div key={item.id}>
                <Link to={`/user/${item.id}`}>{item.name}</Link>
              </div>
          ))}
        </div>
        <div>
          <h2>User List with Name</h2>

          {userData.map((item) => (
              <div key={item.id}>
                <Link to={`/user/${item.id}/${item.name}`}>{item.name}</Link>
              </div>
          ))}
        </div>
    </div>
  )
}

export default User