// player.js

import React from 'react';
import { useGameContext } from '../context';
import { useNavigate } from'react-router-dom';


function Player() {
  const navigate = useNavigate();
  const { numberOfPlayers } = useGameContext();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleOpenWordClick = () => {
    // Ваша логика для открытия слова
    console.log(`Игрок открывает слово`);
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
