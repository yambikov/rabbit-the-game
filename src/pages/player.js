// player.js
import React, { useEffect } from 'react';
import { useGameContext } from '../context';
import { useNavigate } from 'react-router-dom';

function Player() {
  const {
    getCurrentPlayer,
    gameStarted,
    numberOfPlayers,
    currentPlayerIndex,
    endGame
  } = useGameContext();


  const navigate = useNavigate();

  useEffect(() => {
    if (!gameStarted) {
      // saveGameState();
      navigate('/finish');
    }
  }, [gameStarted, currentPlayerIndex, numberOfPlayers, navigate, endGame]);

  const currentPlayer = getCurrentPlayer();

  const handleOpenWordClick = () => {
    navigate('/next-player');
  };

  if (!gameStarted) {
    return null;
  }

  return (
    <div>
      <h2>Игрок</h2>
      <p>ID игрока: {currentPlayer?.id}</p>
      <button onClick={handleOpenWordClick}>Открыть слово</button>
    </div>
  );
}

export default Player;
