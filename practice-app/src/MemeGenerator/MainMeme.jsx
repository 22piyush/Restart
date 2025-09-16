import React from 'react'
import Random from './Random'
import Tag from './Tag'

function MainMeme() {
  return (
    <div>
        <div>
            <h1 style={{textAlign:'center'}}>Meme Generator</h1>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div><Random/></div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div><Tag/></div>
        </div>
    </div>
  )
}

export default MainMeme