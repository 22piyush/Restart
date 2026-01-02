import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetail() {

    const { id , name } = useParams();

    return (
        <div>
            <h1>User Detail Page</h1>
            <p>User ID: {id}</p>
             <p>User Name: {name}</p>
        </div>
    )
}

export default UserDetail