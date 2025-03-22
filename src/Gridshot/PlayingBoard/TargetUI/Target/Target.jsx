import { useState } from 'react';
import './Target.css';

const Target = ({score, setScore, boardPos, fireShot}) => {
  const [pos, setPos] = useState({
    randomX: Math.random(),
    randomY: Math.random()
  });

  const handleFireShot = () => {
    fireShot.play(); 
    setPos({
      randomX: Math.random(),
      randomY: Math.random()
    });
    setScore({...score, point: score.point + 1});
  };

  const posX = Math.floor(pos.randomX * (boardPos.width - 130)) + 65;
  const posY = Math.floor(pos.randomY * (boardPos.height - 130)) + 65;
  
  return (
    <button
      className="Target"
      style={
        {position: 'absolute',top: `${posY}px`, left: `${posX}px`}
      }
      onClick={handleFireShot}
    >
    </button>
  );
};

export default Target;
