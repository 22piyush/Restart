import React, { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    firstName:"", 
    lastName:"", 
    email:"", 
    country:"India", 
    streetAddress:"", 
    city:"", 
    state:"", 
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:"",


  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;

    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}))
  }

  function submitHandler(event){
    event.preventDefault();

    console.log(formData);
    
  }

  return (

    <div style={{display:'flex', justifyContent:'center'}}>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label><br/>
        <input type="text" name='firstName' 
          id='firstName' placeholder='First Name' value={formData.firstName}
          onChange={changeHandler}/><br/>

          <label htmlFor="lastName">Last Name</label><br/>
        <input type="text" name='lastName' 
          id='lastName' placeholder='Last Name' value={formData.lastName}
          onChange={changeHandler}/><br />

          <label htmlFor="email">Email</label><br/>
        <input type="email" name='email' 
          id='email' placeholder='email' value={formData.email}
          onChange={changeHandler}/><br />


        <label htmlFor="country">Country</label><br/>
        <select id='country' name='country' value={formData.country} onChange={changeHandler}>
          <option value="India">India</option>
          <option value="US">United States</option>
          <option value="Canada">Canada</option>
          <option value="Dubai">Dubai</option>
        </select><br/>

        <label htmlFor="streetAddress">Street Address</label><br/>
        <input type="text" name='streetAddress' 
          id='streetAddress' placeholder='Street Address' value={formData.streetAddress}
          onChange={changeHandler}/><br />

          <label htmlFor="city">city</label><br/>
        <input type="text" name='city' 
          id='city' placeholder='city' value={formData.city}
          onChange={changeHandler}/><br />

        <label htmlFor="state">State</label><br/>
        <input type="text" name='state' 
          id='state' placeholder='State' value={formData.state}
          onChange={changeHandler}/><br />

        <label htmlFor="postalCode">Postal Code</label><br/>
        <input type="text" name='postalCode' 
          id='postalCode' placeholder='112233' value={formData.postalCode}
          onChange={changeHandler}/><br />

          <fieldset>

            <legend>By Email</legend>

           Comments <input id='comments' name='comments' 
             type='checkbox' value={formData.comments} onChange={changeHandler}/><br/>
           
           Candidates <input id='candidates' name='candidates' 
              type='checkbox' value={formData.candidates} onChange={changeHandler}/><br/>

           Offers <input id='offers' name='offers' 
             type='checkbox' value={formData.offers} onChange={changeHandler}/><br/>

          </fieldset><br/>

          <fieldset>
            <legend>Push Notification</legend>

            <input type="radio" 
              onChange={changeHandler} id='pushEverything'
               name='pushNotifications' value="Everything" /> Everything <br/>

              <input type="radio" 
              onChange={changeHandler} id='pushEmail'
               name='pushNotifications' value="same as email" /> Same as email <br/>

              <input type="radio" 
               onChange={changeHandler} id='pushNothing'
               name='pushNotifications' value="No Push Nothing" /> Nothing <br/>   
          </fieldset> <br/>

          <button >Save</button>
      </form>
    </div>
    
  )
}

export default App