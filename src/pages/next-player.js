import React from 'react';
import { useGameContext } from '../context';
import { useNavigate } from 'react-router-dom';

function NextPlayer() {
  const {
    getCurrentPlayer,
    currentSubtheme,
    moveToNextPlayer,
  } = useGameContext();
  const navigate = useNavigate();

  const currentPlayer = getCurrentPlayer();
  const displayTheme = currentPlayer?.name === 'Заяц' ? 'Заяц' : currentSubtheme;

  const handleNextPlayerClick = () => {
    moveToNextPlayer();
    navigate('/player');
  };

  return (
    <div>
      <p>Имя игрока: {currentPlayer?.name}</p>
      <p>ID игрока: {currentPlayer?.id}</p>
      <p>Тема для игрока: {displayTheme}</p>
      <button onClick={handleNextPlayerClick}>Следующий игрок</button>
    </div>
  );
}

export default NextPlayer;
