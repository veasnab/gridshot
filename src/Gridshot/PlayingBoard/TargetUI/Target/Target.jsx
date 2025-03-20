import { useState } from 'react';
import bulletSound from '../../../../assets/shot.mp3'; 

import './Target.css';

const Target = ({score, setScore, boardPos}) => {
  const [pos, setPos] = useState({
    randomX: Math.random(),
    randomY: Math.random()
  });

  const handleFireShot = () => {
    const fireShot = new Audio(bulletSound);
    fireShot.play(); 
    setPos({
      randomX: Math.random(),
      randomY: Math.random()
    });
    setScore({...score, point: score.point + 1});
  };

  const posX = pos.randomX * boardPos.width + boardPos.x;
  const posY = pos.randomY * boardPos.height + boardPos.y;
  
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
