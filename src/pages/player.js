import React from 'react';
import { useParams } from 'react-router-dom';

function Player() {
  const { playerId } = useParams();

  const handleBackClick = () => {
    // Вернуть пользователя на предыдущую страницу
    window.history.back();
  };

  const handleOpenWordClick = () => {
    // Здесь можете добавить логику для открытия слова
    console.log(`Игрок ${playerId} открывает слово`);
  };

  return (
    <div>
      <h2>Игрок {playerId}</h2>
      <button onClick={handleBackClick}>Назад</button>
      <button onClick={handleOpenWordClick}>Открыть слово</button>
    </div>
  );
}

export default Player;
