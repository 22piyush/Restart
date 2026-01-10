import {useLayoutEffect, useRef, useState} from 'react'
import Example2 from './Example2';

function UseLayoutEffect() {

    const boxRef = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
       setHeight(boxRef.current.clientHeight);
    },[]); 

  return (
    <div>
        <div ref={boxRef} style={{width:"200px", padding:"20px", background:"#eeee"}}>
            Hellow World! Measure Me
        </div>
        <p>Height: {height}px</p>

        <Example2/>
    </div>
  )
}

export default UseLayoutEffect