import React, { useState } from 'react';

function FormHandling() {

  const [formData, setFormData] = useState({
    gender: "",
    agree: false,
    country: "India"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form with checkbox, radio & select</h2>

      {/* Radio buttons */}
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>

      <br />

      {/* Select */}
      Country:
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      <br />

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        I agree to terms and conditions
      </label>

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormHandling;
