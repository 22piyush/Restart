import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        
        const handleResize = () =>{
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);

    }, []);




  return (
    <div>
        <h2>Window width tracker</h2>
        <p>Current Width : {width}px</p>
    </div>
  )
}

export default UseEffect