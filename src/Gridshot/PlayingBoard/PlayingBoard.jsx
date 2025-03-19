import React, { useRef, useState, useEffect } from 'react';
import StartUI from './StartUI/StartUI';
import Targets from './TargetUI/TargetUI';
import EndUI from './EndUI/EndUI';
import './PlayingBoard.css'

const PlayingBoard = ({score, setScore, gameState, setGameStates}) => {
  const boardRef = useRef();
  const [boardPos, setBoardPos] = useState(null);
  const updateBoardPos = () => {
    const pos = boardRef.current.getBoundingClientRect();
    const { x, width, y, height } = pos;
    setBoardPos({ x, width, y, height });
  };
 
  useEffect(() => {
    updateBoardPos();
    window.addEventListener('resize', updateBoardPos);
    return () => {
      window.removeEventListener('resize', updateBoardPos);
    };
  }, []);

  const renderUI = () => {
    switch (gameState) {
      case 'start': return <StartUI setGameStates={setGameStates} />;
      case 'targets': return <Targets boardPos={boardPos} score={score} setScore={setScore} />;
      case 'end': return <EndUI setGameStates={setGameStates} score={score} setScore={setScore}/>;
      default:return null;}
  };

  const handlePrecision = () => {
    if (gameState !== 'targets') return;
    setScore(prevScore => ({...prevScore, precision: prevScore.precision + 1}));
  };

  return (
    <section ref={boardRef} className="PlayingBoard" onClick={handlePrecision}>
      {renderUI()}
    </section>
  );
};

export default PlayingBoard;
