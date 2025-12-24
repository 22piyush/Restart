import React, { useState, useRef } from "react";

function Countdown() {
  const [timer, setTimer] = useState({
    hours: 0,
    minute: 0,
    seconds: 0,
  });

  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        let { hours, minute, seconds } = prev;

        seconds++;

        if (seconds === 60) {
          seconds = 0;
          minute++;
        }

        if (minute === 60) {
          minute = 0;
          hours++;
        }

        return { hours, minute, seconds };
      });
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1>Countdown Timer</h1>

        <div>
          <input value={timer.hours} readOnly />
          <input value={timer.minute} readOnly />
          <input value={timer.seconds} readOnly />
        </div>

        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={pauseTimer}>Pause</button>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
