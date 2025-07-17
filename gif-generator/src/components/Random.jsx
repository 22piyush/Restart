import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function Random() {
  const [gif, setGif] = useState('');
  const [loading , setLoading]  = useState(true);

  async function clickHandler() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    try {
      const { data } = await axios.get(url);
      const imageUrl = data.data.images.downsized_large.url;
      setGif(imageUrl);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching random GIF:', error);
    }
  }

  useEffect(()=>{
    clickHandler();
  },[])

  return (
    <div className="bg-white w-80 p-4 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Tag GIF</h2>
      
      <div className='w-64 h-48 flex items-center justify-center'>
        {
          loading ? (
            <CircularProgress />
          ) : (
            <img src={gif} alt="Tag Gif" className="w-64 h-48 object-cover rounded mb-4" />
          )
        }
      </div>



      <button
        onClick={clickHandler}
        className=" cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Generate
      </button>
    </div>

  )
}

export default Random