import React, { useState } from 'react'

function MainFifth() {

    const [formData , setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        comments:'',
        isVisible:true
    })

    const handleFormData = (event) =>{
        setFormData(prevData => ({

            ...prevData,
            [event.target.name]:event.target.value

        }))
    }

    const handleFormSubmit = () =>{
        console.log(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            comments: ''
        }) 
    }

  return (
    <div>
        <div>

            <input type="text" value={formData.firstName} placeholder='Enter Your First Name' name="firstName" id="firstName" onChange={handleFormData}/><br/><br/>
            <input type="text" value={formData.lastName} placeholder='Enter Your Last Name' name="lastName" id="lastName" onChange={handleFormData}/><br/><br/>
            <input type="email" value={formData.email} placeholder='Enter Your Email' name="email" id="email" onChange={handleFormData}/><br/><br/>
            <textarea name="comments" value={formData.comments} placeholder='Enter Your Comments' id="comments" onChange={handleFormData}></textarea><br/><br/>

            <input type="checkbox" name="isVisible" id="isVisible" onChange={handleFormData} checked={formData.isVisible}/>


            <button onClick={handleFormSubmit}>Submit</button>
        </div>
    </div>
  )
}


export default MainFifth