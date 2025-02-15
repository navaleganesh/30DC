import React, { useEffect, useState } from 'react'

function Seven() {
    const [time, setTime] = useState(60)
    const [isRunning, setIsRunning] = useState(false);
 
  useEffect(()=>{
       if(isRunning && time > 0) {
        const timer = setTimeout(() =>setTime(time-1), 1000);
        return ()=> clearTimeout(timer)
       } 
  }, [time,isRunning])
  
 const handleStart = ()=>{
    setIsRunning(true)
 }
 const handleStop = ()=>{
    setIsRunning(false)
 }
  return (
    <div>
        Time Left: {time} second
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Seven