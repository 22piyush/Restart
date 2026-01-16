import React from 'react'
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

function Form() {

    const { register, handleSubmit, control } = useForm();
    
    console.log(useForm());
    
    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <div style={{marginTop:"100px"}}>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name</label><br/>
                <input type="text" id="name" 
                {...register("name", {
                    required: "Name is required",

                })}/>
                <br/><br/>
                <label htmlFor="">Email</label><br/>
                <input type="email" id="email" 
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address"
                    }
                })}/>
                <br/><br/>
                <label htmlFor="">Age</label><br/>
                <input type="text" id="age" 
                {...register("age", {
                    required: "Age is required"
                })}/>
                <br/><br/>

                <button type='submit'>Submit</button>
            </form>

            <DevTool control={control} placement='top-left'/>
        </div>
    </div>
  )
}

export default Form