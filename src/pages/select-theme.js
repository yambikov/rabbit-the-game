// select-theme.js
import React, { useState, useEffect } from 'react';
import themes from '../components/themesData';
import { useGameContext } from '../context';
import { useNavigate } from'react-router-dom';



function ChooseTheme() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const navigate = useNavigate();
  const { startGame, chooseRandomSubtheme, numberOfPlayers, players, subthemes, gameState } = useGameContext();

  // Используйте useEffect для выбора случайной темы при монтировании компонента
  useEffect(() => {
    handleRandomThemeClick();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только при монтировании

  const handleBackClick = () => {
    // Вернуть пользователя к выбору количества игроков
    navigate('/select-players');

  };

  const handleChooseThemeClick = () => {
    navigate('/manual-select-theme');
  };


  const handleRandomThemeClick = () => {
    // Выбрать случайную тему
    const allThemes = Object.keys(themes);
    let randomThemeType;
  
    do {
      randomThemeType = allThemes[Math.floor(Math.random() * allThemes.length)];
    } while (randomThemeType === selectedTheme);
  
    // Установить выбранную тему в состояние
    setSelectedTheme(randomThemeType);
  };

  // Внутри handleStartGameClick в select-theme.js


const handleStartGameClick = () => {

    startGame(selectedTheme); // Начать игру с выбранной темой
    chooseRandomSubtheme(selectedTheme); // Выбираем случайную подтему
    // saveGameState(); // Сохранение состояния игры
    navigate('/player');
 

  console.log(`Выбранная тема: ${selectedTheme}`);
  console.log(`Количество игроков: ${numberOfPlayers}`);
  console.log(`Игроки: ${players}`);
  console.log(`Состояние игры: ${gameState}`);
  console.log(`Подтемы: ${subthemes}`);
};

  

  

  return (
    <div>
      <button onClick={handleBackClick}>Назад</button>
      <div>
        <h3>Тема:</h3>
        <p>{selectedTheme}</p>
        <button onClick={handleRandomThemeClick}>Случайная тема</button>
      </div>

      <button onClick={handleChooseThemeClick}>Выбрать тему</button>
      <button onClick={handleStartGameClick}>Начать игру</button>
    </div>
  );
}

export default ChooseTheme;
