import React from 'react'

function FormHandling() {
  return (
    <div>
        <h2>Form with checkbox, radio & select</h2>

        <label>
            <input type="radio" name="gender" value="Male"/>
            Male
        </label>

        <label>
            <input type="radio" name="gender" value="Female"/>
            Female
        </label>

        Country: 
        <select name="country">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
        </select>

        <label>
            <input type='checkbox' name="agree"/>
            I agree to terms and conditions
        </label>
        <br/>

        <button type='submit'>Submit</button>

    </div>
  )
}

export default FormHandling