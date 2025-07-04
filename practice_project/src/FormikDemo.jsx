import React from 'react';
import { useFormik } from 'formik';

function FormikDemo() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: (values) => {
         if(values.name == "" || values.email == ""){
             alert('Please do form validations.')
         }else{
              alert(JSON.stringify(values));
         }
    },
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <h2 style={{ margin: '20px' }}>Simple Form</h2>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ margin: '20px' }}>
            Name: 
            <input
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>

          <div style={{ margin: '20px' }}>
            Email: 
            <input
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit" style={{ margin: '20px' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormikDemo;
