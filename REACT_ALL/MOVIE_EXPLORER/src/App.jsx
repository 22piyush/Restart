import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  )
}

export default App