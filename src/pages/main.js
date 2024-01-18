// main.js

import React from 'react';
import { useGameContext } from '../context';
import { useNavigate } from 'react-router-dom';

function Main() {

  const { resetGame,  saveGameState} = useGameContext();
  const navigate = useNavigate();

  const handlePlayClick = () => {
    resetGame();
    // saveGameState();
    
    navigate('/select-players');
  };


  return (
    <div>
      <h2>Стартовый экран</h2>
      <button onClick={() => navigate('/rules')}>Правила</button>
      <button onClick={() => navigate('/donate')}>Донат</button>
      <button onClick={handlePlayClick}>Играть</button>
    </div>
  );
}

export default Main;
