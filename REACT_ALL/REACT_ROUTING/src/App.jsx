import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              {/* Show Inside Header  */}
              <Route path='/' element={<Header/>}>
                  


              </Route>

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App