import React, { useState } from 'react';

function Tag() {
  const [tag, setTag] = useState('');
  const [gif, setGif] = useState('https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'); // placeholder

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const handleClick = () => {
    // Fetch logic goes here (e.g., using Giphy API based on `tag`)
    console.log('Generate GIF for tag:', tag);
  };

  return (
    <div className="bg-white w-80 p-4 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Tag GIF</h2>
      <img
        src={gif}
        alt="Tag Gif"
        className="w-64 h-48 object-cover rounded mb-4"
      />
      <input
        type="text"
        value={tag}
        onChange={handleChange}
        placeholder="Enter a tag"
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
