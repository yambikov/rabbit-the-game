// manual-select-theme.js

import React from 'react';
import themes from '../utils/themesData';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../context';

function ManualThemeSelection() {
  const { startGame, chooseRandomSubtheme,  } = useGameContext();
  const navigate = useNavigate();

  const handleThemeButtonClick = (themeType) => {
    // Начать игру с выбранной темой
    startGame(themeType);
    // Выбираем случайную подтему для темы
    chooseRandomSubtheme(themeType);
    // saveGameState(); // Сохранение состояния игры
    // Перенаправляем пользователя на страницу игрока
    navigate('/player');
  };

  const handleBackClick = () => {
    navigate('/select-theme');
  };

  return (
    <div>
      <button onClick={handleBackClick}>Назад</button>
      <h2>Ручной выбор тем</h2>
      <div>
        {Object.keys(themes).map((themeType) => (
          <button key={themeType} onClick={() => handleThemeButtonClick(themeType)}>
            {themeType}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ManualThemeSelection;
