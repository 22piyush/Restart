import React from 'react'
import { useFormik } from 'formik';

function RegisterForm() {
    
    function verifyUserDetails(userDetails){
        const errors = {};
        if(userDetails.name == ''){
            errors.name = 'Name is required';
        }
        if(userDetails.email == ''){
            errors.email = 'Email is required';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
        },
        validate: verifyUserDetails,  
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
              <dd style={{ color: 'red' }}>{formik.errors.name}</dd>
            </div>
  
            <div style={{ margin: '20px' }}>
              Email: 
              <input
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <dd style={{ color: 'red' }}>{formik.errors.email}</dd>
            </div>
  
            <button type="submit" style={{ margin: '20px' }}>Submit</button>
          </form>
        </div>
      </div>
    );
}

export default RegisterForm;
