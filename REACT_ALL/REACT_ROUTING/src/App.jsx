import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              {/* Show Inside Header  */}
              <Route path='/' element={<Header/>}>
                  
                {/* Main Page added  */}
                <Route path="/" element={<Home/>}/>

                {/* Prefix */}
                <Route path="in">
                  <Route path="/in/user">
                    <Route path='/in/user/about' element={<About/>}/>
                  </Route>
                </Route>

                <Route path='/contact' element={<Contact/>}/>


              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App