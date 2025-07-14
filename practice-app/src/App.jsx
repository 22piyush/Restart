import React from 'react'
import { NavLink, Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Labs from './components/Labs'
import Header from './components/Header'

function App() {
  return (
    <div>

      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
             <li>
              <NavLink to="/about">About</NavLink>
            </li>
             <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/labs" element={<Labs/>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App