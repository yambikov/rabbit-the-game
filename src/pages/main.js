// main.js

import React from 'react';
import { useGameContext } from '../context';
import { useNavigate } from 'react-router-dom';

function Main() {
  const { updateNumberOfPlayers } = useGameContext();
  const navigate = useNavigate();

  const handlePlayClick = () => {
    // Сбрасываем количество игроков до 4
    updateNumberOfPlayers(4);

    // Записываем новое количество игроков в локальное хранилище
    localStorage.setItem('numberOfPlayers', '4');

    // Перенаправляем пользователя на страницу выбора игроков с использованием useNavigate
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
