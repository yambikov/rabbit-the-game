import React, { useState, useEffect } from 'react';
import themes from '../components/themesData';
import { useGameContext } from '../context';
import { useNavigate } from'react-router-dom';



function ChooseTheme() {
  const { numberOfPlayers, players } = useGameContext();
  const [selectedTheme, setSelectedTheme] = useState(null);
  const navigate = useNavigate();

  console.log(`ChooseTheme numberOfPlayers: ${numberOfPlayers}, players: ${players}`);

  // Используйте useEffect для выбора случайной темы при монтировании компонента
  useEffect(() => {
    handleRandomThemeClick();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только при монтировании

  const handleBackClick = () => {
    // Вернуть пользователя к выбору количества игроков
    //window.location.href = '/select-players';
    navigate('/select-players');

  };

  const handleChooseThemeClick = () => {
    //window.location.href = '/manual-select-theme';
    navigate('/manual-select-theme');
  };

  // const handleRandomThemeClick = () => {
  //   // console.log("Нажата кнопка Случайная тема либо обновлена страница");
  //   // Выбрать случайную тему
  //   const allThemes = Object.keys(themes);
  //   const randomThemeType = allThemes[Math.floor(Math.random() * allThemes.length)];
  //   // ниже реализация выбора случайного слова
  //   // const themeOptions = themes[randomThemeType];
  //   // const randomTheme = themeOptions[Math.floor(Math.random() * themeOptions.length)];

  //   // Установить выбранную тему в состояние
  //   setSelectedTheme(randomThemeType);
  // };

  const handleRandomThemeClick = () => {
    // Выбрать случайную тему
    const allThemes = Object.keys(themes);
    let randomThemeType;
  
    do {
      randomThemeType = allThemes[Math.floor(Math.random() * allThemes.length)];
    } while (randomThemeType === selectedTheme);
  
    // Установить выбранную тему в состояние
    setSelectedTheme(randomThemeType);

    console.log(`Выбрана случайная тема: ${selectedTheme}`);
  };
  

  const handleStartGameClick = () => {
    // Перенаправить пользователя на страницу игрока
    // window.location.href = '/player';
    navigate('/player')
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
