import React from 'react'
import { useForm, Watch } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

function Form() {

    const { register, handleSubmit, control, formState, watch } = useForm({
        defaultValues:{
            name:"Piyush",
            email:"",
            age:"",
            social : {
                facebook:"",
                twitter:""
            }
        }
    });

    // Hanlde data with Request
    // const { register, handleSubmit, control, formState } = useForm({
    //     defaultValues: async () => {
    //         const response = await fetch("URL");
    //         const data = await response.json();
    //         return {
    //             name: data.name,
    //             email: data.email,
    //             age: 18
    //         }
    //     }
    // });
    
    const { errors } = formState;
    
    console.log(useForm());
    
    const onSubmit = (data) => {
        console.log(data);
    }


    const watchName = watch(["name", "email"]);

  return (
    <div style={{marginTop:"100px"}}>
        <div>
            <h1>{watchName}</h1>
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
                    },
                    validate:{
                        notAdminEmail: (value) => {
                            return(
                                value !== "admin@example.com" || "Enter a different email address"
                            )
                        },
                        notBlacklistedEmail: (value) => {
                            return (
                                !value.endsWith("@blacklisted.com") || "This domain is not allowed"
                            )
                        }
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


                <label htmlFor="country">Country</label> <br/>
                <select id="country" {...register("country")}>
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="Russia">Russia</option>
                    <option value="Italy">Italy</option>
                </select>
                <br/><br/>


                <label>Gender</label>
                <br />

                <label htmlFor="male">
                <input
                    type="radio"
                    id="male"
                    value="male"
                    {...register("gender", { required: true })}
                />
                Male
                </label>

                <br />

                <label htmlFor="female">
                <input
                    type="radio"
                    id="female"
                    value="female"
                    {...register("gender", { required: true })}
                />
                Female
                </label>

                <br/><br/>

                <button type='submit'>Submit</button>
            </form>

            <DevTool control={control} placement='top-left'/>
        </div>
    </div>
  )
}

export default Form