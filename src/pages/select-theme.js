import React, { useState, useEffect } from 'react';
import themes from '../components/themesData';

function ChooseTheme({ numberOfPlayers }) {
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Используйте useEffect для выбора случайной темы при монтировании компонента
  useEffect(() => {
    handleRandomThemeClick();
  }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только при монтировании

  const handleBackClick = () => {
    // Вернуть пользователя к выбору количества игроков
    window.location.href = '/select-players';
  };

  const handleChooseThemeClick = () => {
    // Возможно, вы хотите обработать выбранную тему здесь
    console.log("Нажата кнопка Выбрать тему", selectedTheme);
  };

  const handleRandomThemeClick = () => {
    console.log("Нажата кнопка Случайная тема либо обновлена страница");
    // Выбрать случайную тему
    const allThemes = Object.keys(themes);
    console.log("Все темы:", allThemes);
    const randomThemeType = allThemes[Math.floor(Math.random() * allThemes.length)];
    console.log("Выбранный тип темы:", randomThemeType);
    // const themeOptions = themes[randomThemeType];
    // const randomTheme = themeOptions[Math.floor(Math.random() * themeOptions.length)];

    // Установить выбранную тему в состояние
    setSelectedTheme(randomThemeType);
  };

  const handleStartGameClick = () => {
    // Действия при нажатии на кнопку "Начать игру"
    // Возможно, вы хотите перейти к игровому компоненту с выбранной темой
  };

  

  return (
    <div>
      <h2>Выбор темы</h2>
      <button onClick={handleBackClick}>Назад</button>
      <button onClick={handleChooseThemeClick}>Выбрать тему</button>
      <button onClick={handleRandomThemeClick}>Случайная тема</button>
      <button onClick={handleStartGameClick}>Начать игру</button>

      <div>
        <h3>Выбранная тема:</h3>
        <p>{selectedTheme}</p>
      </div>
    </div>
  );
}

export default ChooseTheme;
