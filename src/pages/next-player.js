import React from 'react';
import { useGameContext } from '../context';
import { useNavigate, useParams } from 'react-router-dom'; // Импортируем useParams для получения параметров маршрута

function NextPlayer() {
  const {
    getCurrentPlayer,
    currentSubtheme,
    moveToNextPlayer,
  } = useGameContext();
  const navigate = useNavigate();
  const { playerId } = useParams(); // Получаем ID игрока из параметров маршрута

  const currentPlayer = getCurrentPlayer(playerId); // Передаем полученный ID для получения следующего игрока
  const displayTheme = currentPlayer?.name === 'Заяц' ? 'Заяц' : currentSubtheme;

  const handleNextPlayerClick = () => {
    moveToNextPlayer();
    navigate(`/next-player/${currentPlayer?.id}`); // Передаем новый ID игрока при переходе к следующему игроку
  };

  return (
    <div>
      <h2>Следующий игрок</h2>
      <p>ID игрока: {currentPlayer?.id}</p>
      <p>Тема для игрока: {displayTheme}</p>
      <button onClick={handleNextPlayerClick}>Следующий игрок</button>
    </div>
  );
}

export default NextPlayer;
