import React, { useState } from 'react'

function Countdown() {

    const [timer, setTimer] = useState({hours:0,minute:0,seconds:0})

    const startTimer =()=>{
            
    }

  return (
    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <div>
           <div><h1>Countdown Timer</h1></div>
            <div style={{width:'40%',display:'flex',justifyContent:'center', alignItems:'center'}}>
                <input type="text"  value={timer.hours} id="hours" />
                <input type="text"  value={timer.minute} id="minute" />
                <input type="text"  value={timer.seconds} id="seconds" />
            </div>
            <div  style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <button onClick={startTimer}>Start</button>
                <button>Pause</button>
                <button>Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Countdown