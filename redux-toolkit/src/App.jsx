import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi';
import SearchBar from './components/SearchBar';

function App() {



  return (
    <div className="h-screen w-full bg-gray-500 text-white">
        <SearchBar/>
    </div>
  )
}

export default App;