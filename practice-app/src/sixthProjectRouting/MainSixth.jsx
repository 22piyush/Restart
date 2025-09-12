import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Support from './components/Support'
import About from './components/About'
import NotFound from './components/NotFound'
import { Link , NavLink } from 'react-router-dom'
import "./MainSixth.css"
import MainHeader from './components/MainHeader'


function MainSixth() {
  return (
    <div>

      <div>
          <nav>
            <ul style={{listStyle:'none'}}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/support">Support</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/*">Not Found</NavLink>
              </li>
            </ul>
          </nav>
      </div>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default MainSixth