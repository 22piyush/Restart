import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Labs from './components/Labs'

function App() {
  return (
    <div>

      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
             <li>
              <Link to="/about">About</Link>
            </li>
             <li>
              <Link to="/labs">Labs</Link>
            </li>
          </ul>
        </nav>
      </div> */}

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/labs" element={<Labs/>}></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
      </Routes>

    </div>
  )
}

export default App