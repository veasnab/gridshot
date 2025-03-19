import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import PlayingBoard from './PlayingBoard/PlayingBoard';

import './Gridshot.css'

const Gridshot = () => {
  const [gameState, setGameStates] = useState('start');
  const [score, setScore] = useState ({point: 0, precision: 0});

  return (
    <article className="Gridshot">
        <ScoreBoard 
          score={score}
          gameState={gameState} 
          setGameStates={setGameStates}
        />
        <PlayingBoard 
          score={score}
          setScore={setScore} 
          gameState={gameState} 
          setGameStates={setGameStates}
        />
      </article>
  )
}

export default Gridshot;