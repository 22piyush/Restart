import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import CircularProgress from '@mui/material/CircularProgress';

function Blogs() {

  const {loading} = useContext(AppContext)

  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      {loading ? <CircularProgress /> : <p>Blog content will appear here.</p>}
    </div>
  )
}

export default Blogs