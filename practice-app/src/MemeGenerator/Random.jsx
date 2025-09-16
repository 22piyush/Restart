import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function Random() {

    const [gif, setGif] = useState('');

    async function fetchData() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
       const {data} = await axios.get(url);
       const imgSource = data.data.images.downsized_large.url;
       setGif(imgSource);
    }

    useEffect(()=>{
        fetchData();
    },[])

    function clickHandler(){

    }

  return (
    <div style={{border:'1px solid gray'}}>
        <h1 style={{textAlign:'center'}}>Random Gif </h1>
        <div style={{display:'flex',flexDirection:'column'}}>
            <img src={gif} height='400px' width='450'/>
            <button onClick={clickHandler} style={{width:'100px'}}>Generate</button>
        </div>
    </div>
  )
}

export default Random