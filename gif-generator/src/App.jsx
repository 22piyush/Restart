import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
      <div className="w-full h-screen flex flex-col items-center bg-blue-400 relative overflow-x-hidden">
          <h1 className="bg-white rounded-lg absolute w-11/12 text-center mt-3 p-2 text-4xl font-bold shadow-md">
            Random GIF
          </h1>
            <div className="flex items-start justify-center gap-40 flex-wrap mt-40">
              <Random />
              <Tag />
            </div>

      </div>

  )
}

export default App