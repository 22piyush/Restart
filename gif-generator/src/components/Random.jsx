
import CircularProgress from '@mui/material/CircularProgress';
import useGif from '../hooks/useGif';

function Random() {

  const { gif, loading, fetchGif } = useGif(); 

  return (
    <div className="bg-white w-80 p-4 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Random GIF</h2>
      
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
        onClick={()=>fetchGif()}
        className=" cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Generate
      </button>
    </div>

  )
}

export default Random