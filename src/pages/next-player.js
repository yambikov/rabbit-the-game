import React from 'react';
import { useGameContext } from '../context';
import { useNavigate } from 'react-router-dom';

function NextPlayer() {
  const {
    getCurrentPlayer,
    currentSubtheme,
    moveToNextPlayer,
    numberOfPlayers,
    currentPlayerIndex,
  } = useGameContext();
  const navigate = useNavigate();

  const currentPlayer = getCurrentPlayer();
  const displayTheme = currentPlayer?.name === 'Заяц' ? 'Заяц' : currentSubtheme;

  const handleNextPlayerOrFinishGame = () => {
    if (currentPlayerIndex < numberOfPlayers - 1) {
      moveToNextPlayer();
      navigate('/player');
    } else {
      navigate('/finish');
    }
  };

  const nextButtonText = currentPlayerIndex < numberOfPlayers - 1 ? 'Следующий игрок' : 'Закончить игру';

  return (
    <div>
      <p>Имя игрока: {currentPlayer?.name}</p>
      <p>ID игрока: {currentPlayer?.id}</p>
      <p>Тема для игрока: {displayTheme}</p>
      <button onClick={handleNextPlayerOrFinishGame}>{nextButtonText}</button>
    </div>
  );
}

export default NextPlayer;
