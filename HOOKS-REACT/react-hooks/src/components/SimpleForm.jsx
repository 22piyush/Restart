import React, { useState } from 'react'

function SimpleForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Name", name);
        console.log("Email", email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>React Form Example</h2>

                <label>Name: </label>
                <input type='text' onChange={(e)=>setName(e.target.value)} value={name} />

                <label>Email: </label>
                <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} />

                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm