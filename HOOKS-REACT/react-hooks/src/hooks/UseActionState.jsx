import React, { useActionState } from "react";

function UseActionState() {

  const handleSubmit = async (previousData, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    // Validation errors
    if (!name || !password) {
      return {
        error: "Name and Password are required"
      };
    }

    try {
      console.log("Handle Submit called", name, password);

      // simulate API delay
      await new Promise((res) => setTimeout(res, 2000));

      // simulate API failure
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      return {
        success: true,
        data: { name }
      };

    } catch (err) {
      return {
        error: err.message
      };
    }
  };

  const [state, action, pending] = useActionState(handleSubmit, null);

  return (
    <>
      <h1>useActionState Hook</h1>

      <form action={action}>
        <input type="text" placeholder="Enter Name" name="name" />
        <br /><br />

        <input type="password" placeholder="Enter Password" name="password" />
        <br /><br />

        <button
          disabled={pending}
          style={{ cursor: pending ? "not-allowed" : "pointer" }}
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Error Message */}
      {state?.error && (
        <p style={{ color: "red" }}>
          ❌ {state.error}
        </p>
      )}

      {/* Success Message */}
      {state?.success && (
        <p style={{ color: "green" }}>
          ✅ Submitted: {state.data.name}
        </p>
      )}
    </>
  );
}

export default UseActionState;
