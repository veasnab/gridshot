import {useState, useEffect} from 'react'

import './StartUI.css'

const StartUI = ({setGameStates}) => {
  const [startTime, setStartTime] = useState(false);
  const [time, setTime] = useState(5);

  const timerStarted = () => {
      switch (startTime) {
        case false: return <button className="ready" onClick={() => setStartTime(true)}>Ready</button>;
        case true: return <button className="time">{time}</button>;
      }
  };

  useEffect(() => {
    if(!startTime) return;
    
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (!(time + 1)) {
      setStartTime(false);
      setTime(5);
      setGameStates("targets");
    }
    return () => clearInterval(interval);
  }, [startTime, time]);

  return (
    <section className="StartUI">{timerStarted()}</section>
  )
}

export default StartUI; 