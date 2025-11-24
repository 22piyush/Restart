import React, { useActionState } from 'react'

function UseActionState() {

    const handleSubmit = async (previousData , formData) => {
        
        let name = formData.get('name');
        let password = formData.get('password');
        
        await new Promise(res => setTimeout(res,2000))

        if(name && password){
            return {message : "Data Submitted Successfully"};
        }else{
            return {error : "Data not Submittes"};
        }

        
        
    }
    const [data,action,pending] = useActionState(handleSubmit , undefined);

  return (
    <>
        <div>Use Action State Hook</div>

        <form action={action}>
            <input type="text" defaultValue={data?.name} placeholder='Enter Name' name="name"/><br/>
            <input type="password"defaultValue={data?.password} placeholder='Enter Password' name="password"/><br/>
            <br/><br/>
            <button disabled={pending}>Submit Data</button>
            {
                data?.error ? <span>{data?.error}</span> : <span>{data?.message}</span>
            }
        </form>
    </>
  )
}

export default UseActionState