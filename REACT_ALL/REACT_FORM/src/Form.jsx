import React from 'react'
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

function Form() {

    const { register, handleSubmit, control, formState } = useForm();
    const { errors } = formState;
    
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
                {errors.name?.message && <p className='error'>{ errors.name?.message }</p>}
                <br/><br/>
                <label htmlFor="">Email</label><br/>
                <input type="text" id="email" 
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address"
                    }
                })}/>
                {errors.email?.message && <p  className='error'>{ errors.email?.message }</p>}
                <br/><br/>
                <label htmlFor="">Age</label><br/>
                <input type="number" id="age" 
                {...register("age", {
                    valueAsNumber:true,
                    required: "Age is required",
                    min:{
                        value: 18,
                        message: "Age must be at least 18"
                    },
                    max:{
                        value: 25,
                        message: "Age must be at least 25"
                    }
                })}/>
               { errors.age?.message && <p  className='error'>{ errors.age?.message }</p>}
                <br/><br/>

                <button type='submit'>Submit</button>
            </form>

            <DevTool control={control} placement='top-left'/>
        </div>
    </div>
  )
}

export default Form