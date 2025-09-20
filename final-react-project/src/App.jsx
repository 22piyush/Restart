import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div style={{width:'100%'}}>
        <div>
            <Navbar/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App         