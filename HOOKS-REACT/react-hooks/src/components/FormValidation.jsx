import React, { useState } from 'react'

function FormValidation() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!name || !email){
            setError("Please fill all fields");
        }else{
            setError("");
            console.log("Form Submit", {name , email});
            alert("Form submitted successfully");
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Basic Validation Form</h2>

        <input type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
         placeholder='Enter Your name'/>
        <br/>

        <input type="text" 
         onChange={(e) => setEmail(e.target.value)}
         placeholder='Enter Your Email'/>
        <br/>

        {error && <div style={{color: "red"}}>{error}</div>}

        <button type="submit">Submit</button>
    </form>
  )
}

export default FormValidation