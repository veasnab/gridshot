import { useState, useEffect } from 'react';
import './ScoreBoard.css'
const ScoreBoard = ({score, gameState, setGameStates}) => {
  
  const [playTime, setPlayTime] = useState(60);

  useEffect(() => {
    if(gameState !== 'targets') return; 
    
      const interval = setInterval(() => {
        setPlayTime(playTime - 1);
      }, 1000);

      if (!(playTime)) {
        setGameStates('end');
        setPlayTime(60);
      }

      return () => clearInterval(interval);
    }, [gameState, playTime]);

    const precentPrecision = score.precision === 0 ? 
       (100).toFixed(2) : ((score.point / score.precision) * 100).toFixed(2);
      
  return (
    <section className="ScoreBoard">
      <p className="point">pts: {score.point}</p>
      <p className="time">{playTime}</p>
      <p className="precision"> {precentPrecision}%</p>
    </section>);
}

export default ScoreBoard;