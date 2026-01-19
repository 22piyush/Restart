import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi';

function App() {

  function getPhotos(){
    fetchPhotos('cat');

  }

  function getVideos(){
    fetchVideos('cat');
  }


  return (
    <div className="h-screen w-full bg-gray-500 text-white px-5">
      <button
        onClick={getPhotos}
        className="px-5 py-2 bg-green-400 rounded mr-5 cursor-pointer"
      >
        Get Photos
      </button>

      <button
        onClick={getVideos}
        className="px-5 py-2 bg-blue-400 rounded cursor-pointer"
      >
        Get Videos
      </button>
    </div>

  )
}

export default App;