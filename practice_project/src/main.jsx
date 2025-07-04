// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import FormikDemo from './FormikDemo.jsx'
// import RegisterForm from './RegisterForm.jsx'
// import YupValidation from './YupValidation.jsx'
import App from './App.jsx'
// import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    {/* <FormikDemo /> */}
    <App/>
    {/* <RegisterForm/> */}
    {/* <CookiesProvider> */}

    {/* <YupValidation/> */}
    {/* </CookiesProvider> */}
    </>
  // </StrictMode>,
)
