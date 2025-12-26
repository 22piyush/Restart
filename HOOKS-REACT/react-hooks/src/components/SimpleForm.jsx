import React, { useState } from 'react'

function SimpleForm() {

    const [form ,  setForm] = useState(
       {
         name:"",
         email:""
       }
    )

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Name", form.name);
        console.log("Email", form.email);
    }

    const handleChange = (e) => {
        const {name , value} = e.target;
        setForm((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>React Form Example</h2>

                <label>Name: </label>
                <input type='text' onChange={handleChange} name="name" value={form.name} />

                <label>Email: </label>
                <input type='email' onChange={handleChange}  name="email" value={form.email} />

                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm