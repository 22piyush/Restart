import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact'
import User from './pages/User'
import UserDetail from './pages/UserDetail'

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

                {/* TASK:- DO WITH MULTIPLE IDS Ex.
                "/category/:categoryId/p/:productId" */}
                <Route path='/user/list?' element={<User/>}/>
                <Route path='/user/:id/:name?' element={<UserDetail/>} />


                {/* 404 page  */}
                <Route path='*' element={<h1>Page Not Found</h1>}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App