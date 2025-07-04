import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const YupValidation = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" />
              <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" />
              <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default YupValidation;
