import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checkbox: false,
    gender: "",
    country: ""
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can also store formData in a state/DB here
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
        />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
        />
        <br />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={changeHandler}
            checked={formData.gender === "male"}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={changeHandler}
            checked={formData.gender === "female"}
          />
          Female
        </label>
        <br />

        <label>
          Country:
          <select name="country" value={formData.country} onChange={changeHandler}>
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={changeHandler}
          />
          Accept Terms & Conditions
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
