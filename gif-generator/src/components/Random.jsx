import React, { useState } from 'react'

function Random() {

    const [gif, setGif] = useState('');

    function clickHandler(){

    }

  return (
    <div className="bg-white w-80 p-4 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Tag GIF</h2>
      <img
        src={gif}
        alt="Tag Gif"
        className="w-64 h-48 object-cover rounded mb-4"
      />
      <button
        onClick={clickHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Generate
      </button>
    </div>

  )
}

export default Random