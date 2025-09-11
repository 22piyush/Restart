import React, { useState } from 'react'

function MainFifth() {

    const [formData , setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        comments:'',
        isVisible:true,
        gender: '',
        country: '' 
    })

    const handleFormData = (event) =>{

        const {name , value , checked , type} = event.target

        setFormData(prevData => ({

            ...prevData,
            [name]: type == 'checkbox' ? checked : value

        }))
    }

    const handleFormSubmit = () =>{
        console.log(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
            isVisible: false,
            gender: '',
            country: '' 
        }) 
    }

  return (
    <div>
        <div>

            <input type="text" value={formData.firstName} placeholder='Enter Your First Name' name="firstName" id="firstName" onChange={handleFormData}/><br/><br/>
            <input type="text" value={formData.lastName} placeholder='Enter Your Last Name' name="lastName" id="lastName" onChange={handleFormData}/><br/><br/>
            <input type="email" value={formData.email} placeholder='Enter Your Email' name="email" id="email" onChange={handleFormData}/><br/><br/>
            <textarea name="comments" value={formData.comments} placeholder='Enter Your Comments' id="comments" onChange={handleFormData}></textarea><br/><br/>

            <label>
                <input type="radio" name="gender" value="male" checked={formData.gender == "male"} onChange={handleFormData} />
                Male
            </label>
            <label>
                <input type="radio" name="gender" value="female" checked={formData.gender == "female"} onChange={handleFormData} />
                Female
            </label><br/><br/>

            <label>
                Select Country: 
                <select name="country" value={formData.country} onChange={handleFormData} >
                    <option value="">--Choose Country--</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                </select>
            </label>
        <br/><br/>

            <input type="checkbox" name="isVisible" id="isVisible" onChange={handleFormData} checked={formData.isVisible}/><br/><br/>

            <button onClick={handleFormSubmit}>Submit</button>
        </div>
    </div>
  )
}


export default MainFifth