import React, { useEffect, useLayoutEffect } from 'react'
import { useRef } from 'react'

function USeRef() {

    const divRef = useRef();

    // Use effect run after element visible on Ui 
    useLayoutEffect(()=>{
        const div = divRef.current;
        div.style.backgroundColor = 'red';
    },[])

    return (
        <div ref={divRef} id="content">1</div>
    )
}

export default USeRef