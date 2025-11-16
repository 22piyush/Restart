import React, { useState } from 'react'
import { useRef } from 'react';

// function UseRefHook() {

//     const [count, setCount] = useState(0);

//     let val = useRef(0);

//     let btnRef = useRef();

//     function handleIncrement() {
//         val.current = val.current + 1;
//         console.log(val.current);

//         setCount(count + 1);
        
//     }

//     function changeColour(){
      
//         btnRef.current.style.backgroundColor = "red";
            
        
//     }

//   return (
//     <div style={{display:'flex', justifyContent:'center' , alignItems:'center',marginTop:'200px'}}>

//         <div>
//             <button ref={btnRef} onClick={handleIncrement}>Add</button>
//             <span>{count}</span><br/> <br/> <br/>

//             <button onClick={changeColour}>Change Color of 1st buttton</button>

//         </div>

//     </div>
//   )
// }

function UseRefHook() {

    const [time, setTime] = useState(0);

    let timerRef = useRef(null);

    function startTimer(){

        timerRef.current = setInterval(()=>{
            setTime(time => time + 1);
        }, 1000);

    }

    function stopTimer(){

        if(timerRef.current){
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

    }

    function resetTimer(){

        stopTimer();
        setTime(0);

    }


  return (
    <div style={{display:'flex', justifyContent:'center' , alignItems:'center',marginTop:'200px'}}>

        <div>

           <h1>Stopwatch: {time} seconds</h1>

           <button onClick={startTimer}>Start</button>
           <br/><br/>

           <button onClick={stopTimer}>Stop</button>
           <br/><br/>

           <button onClick={resetTimer}>Reset</button>
           <br/><br/>


        </div>

    </div>
  )
}


export default UseRefHook