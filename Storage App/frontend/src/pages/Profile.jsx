import React from 'react'

function Profile({user}) {
  return (
     <div>
      <h1>Profile Page</h1>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  )
}

export default Profile