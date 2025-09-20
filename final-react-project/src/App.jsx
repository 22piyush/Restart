import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'

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
    </div>
  )
}

export default App         