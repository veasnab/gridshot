import { useState } from 'react';
import bulletSound from '../../../../assets/shot.mp3'; 

import './Target.css';

const Target = ({score, setScore, boardPos}) => {
  const [pos, setPos] = useState({
    x: Math.random() * boardPos.width + boardPos.x,
    y: Math.random() * boardPos.height + boardPos.y
  });

  const fireShot = new Audio(bulletSound); 
  const handleFireShot = () => {
    setPos({
      x: Math.random() * boardPos.width + boardPos.x,
      y: Math.random() * boardPos.height + boardPos.y
    });
    setScore({...score, point: score.point + 1});
    fireShot.play(); 
  };

  return (
    <button
      className="Target"
      style={
        {position: 'absolute',top: `${pos.y}px`, left: `${pos.x}px`}
      }
      onClick={handleFireShot}
    >
    </button>
  );
};

export default Target;
