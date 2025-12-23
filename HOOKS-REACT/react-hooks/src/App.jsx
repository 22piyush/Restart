import { useActionState } from "react";

function App() {

  const handleSubmit =(previousData, formData)=>{
    let name = formData.get('name');
    let password = formData.get('password');

    console.log("Handle Submit called" , name , password);
  }
  const [data, action, pending] = useActionState(handleSubmit , undefined);

  return (
    <>
        <h1>Use Action State Hook</h1>

        <form action={action}>
            <input type="text" placeholder="Enter Name" name="name"/>
            <br/><br/>
             <input type="text" placeholder="Enter Password" name="password"/>
            <br/><br/>

            <button>Submit</button>
        </form>
    </>
  );
}

export default App;
