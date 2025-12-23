import { useActionState } from "react";

function App() {

  const handleSubmit = async (previousData, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    console.log("Handle Submit called", name, password);

    // simulate API delay
    await new Promise((res) => setTimeout(res, 2000));

    return { name, password };
  };

  const [data, action, pending] = useActionState(handleSubmit, null);

  return (
    <>
      <h1>useActionState Hook</h1>

      <form action={action}>
        <input type="text" placeholder="Enter Name" name="name" />
        <br /><br />

        <input type="password" placeholder="Enter Password" name="password" />
        <br /><br />

        <button disabled={pending}   style={{
    cursor: pending ? "not-allowed" : "pointer"
  }}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>

      {data && (
        <p>
          Submitted: {data.name}
        </p>
      )}
    </>
  );
}

export default App;
