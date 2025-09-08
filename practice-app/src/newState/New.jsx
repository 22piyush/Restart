import React, { useEffect, useState } from 'react'

function New() {

    const [text , setText] = useState('');

    useEffect(() => {
        console.log("Render"); 
    },[])

    function changeHandler(event){
        console.log(event.target.value);
        setText(event.target.value);  
    }

  return (
    <div style={{display:'flex' , justifyContent:'center'}}>
        <input type='text' onChange={changeHandler}/>
        <div>{text}</div>
    </div>
  )
}

export default New