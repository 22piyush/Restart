import { useState } from "react"

function useForm(initialValues = {}, callback) {
 
    const [values, setValues] = useState();

    // Handle input change 
    const handleChange = (e) => {
        const {name, value} = e.target;

        setValues(prev => ({
            ...prev, 
            [name] : value
        }))
    }

    // Handle form submit 
    const handleSubmit =(e)=> {
        e.preventDefault();
        if(callback) callback(values);
    }


    // Reset Form 
    const resetForm =()=> setValues(initialValues)

    return {values, handleChange , handleSubmit, resetForm}
}

export default useForm