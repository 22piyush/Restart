import { useState } from "react"

function useForm(initialValues = {}) {
 
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

        
    }
}

export default useForm