import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  // states
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  //   Button handling
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    if (time !== 0) {
      setElapsedTime((prevElapsedTime) => [...prevElapsedTime, time]);
    }
    setIsRunning(false);
    setTime(0);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setElapsedTime([]);
  };

  //   formatting the time into HH:MM:SS
  const formatTime = (time) => {
    return `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${(
      "0" + Math.floor((time / 1000) % 60)
    ).slice(-2)}:${("0" + ((time / 10) % 100)).slice(-2)}`;
  };

  return (
    <div className="container">
      <div className="timer-box">
        <h1 className="timer">{formatTime(time)}</h1>
        <div className="controls">
          <button onClick={handleStartStop}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>

      <div className="elapsedTime-card">
        <h4>Elapsed Time</h4>
        <ul>
          {elapsedTime.map((elapsedTime, index) => (
            <li key={index}>{formatTime(elapsedTime)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
