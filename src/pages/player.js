import React from 'react';
import { useGameContext } from '../context';

function Player() {
  const { numberOfPlayers } = useGameContext();

  const handleBackClick = () => {
    window.history.back();
  };

  const handleOpenWordClick = () => {
    console.log(`Игрок открывает слово из общего пула для ${numberOfPlayers} игроков`);
  };

  return (
    <div>
      <h2>Игрок</h2>
      <p>Количество игроков: {numberOfPlayers}</p>
      <button onClick={handleBackClick}>Назад</button>
      <button onClick={handleOpenWordClick}>Открыть слово</button>
    </div>
  );
}

export default Player;
