import React from 'react'

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<div>Home Page</div>}></Route>
        <Route path="/" element={<div>Support Page</div>}></Route>
        <Route path="/" element={<div>About Page</div>}></Route>
        <Route path="/" element={<div>Labs Page</div>}></Route>
      </Routes>

    </div>
  )
}

export default App