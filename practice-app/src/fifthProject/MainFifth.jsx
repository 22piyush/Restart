import React, { useState } from 'react'

function MainFifth() {

    const [formData , setFormData] = useState({
        firstName:'',
        lastName:'',
        email:''
    })

    const handleFormData = (event) =>{
        setFormData(prevData => ({

            ...prevData,
            [event.target.name]:event.target.value

        }))
    }

  return (
    <div>
        <div>

            <input type="text" value={formData.firstName} placeholder='Enter Your First Name' name="firstName" id="firstName" onChange={handleFormData}/><br/><br/>
            <input type="text" value={formData.lastName} placeholder='Enter Your Last Name' name="lastName" id="lastName" onChange={handleFormData}/><br/><br/>
            <input type="email" value={formData.email} placeholder='Enter Your Email' name="email" id="email" onChange={handleFormData}/><br/><br/>

        </div>
    </div>
  )
}


export default MainFifth