import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {

    const { register, handleSubmit } = useForm();
    
    console.log(useForm());
    
    const onSubmit = (data) => {

    }

  return (
    <div style={{marginTop:"100px"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Name</label><br/>
            <input type="text" id="name" {...register("name")}/>
            <br/><br/>
            <label htmlFor="">Email</label><br/>
            <input type="email" id="email" {...register("email")}/>
            <br/><br/>
            <label htmlFor="">Age</label><br/>
            <input type="text" id="age" {...register("age")}/>
            <br/><br/>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form