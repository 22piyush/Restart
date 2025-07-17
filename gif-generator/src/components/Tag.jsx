
import CircularProgress from '@mui/material/CircularProgress';
import useGif from '../hooks/useGif';
import { useState } from 'react';

function Tag() {

  const [tag, setTag] = useState('car');

  const { gif, loading, fetchGif } = useGif(tag); // dynamic tag


  return (
    <div className="bg-white w-80 p-4 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Search GIF</h2>
      <div className='w-64 h-48 flex items-center justify-center'>
        {
          loading ? (
            <CircularProgress />
          ) : (
            <img src={gif} alt="Tag Gif" className="w-64 h-48 object-cover rounded mb-4" />
          )
        }
      </div>
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Enter your GIF"
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={()=>fetchGif()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
