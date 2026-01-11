import React from 'react'
import useForm from './useForm'

function Form() {

    const {values, handleChange , handleSubmit, resetForm} = useForm(initialValues, onsubmit);

    const initialValues = {
        email:"",
        password:"",
        name:""
    }

    const onsubmit =(values) => {
        
    }

  return (
    <div>
        <input type="text" name='name' value={handleChange}/>
        <input type="text" name='email' value={handleChange}/>
        <input type="text" name='pass' value={handleChange}/>
    </div>
  )
}

export default Form