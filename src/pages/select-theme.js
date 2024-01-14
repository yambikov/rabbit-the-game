import React from 'react';

function SelectTheme({ numberOfPlayers }) {
  const handleBackClick = () => {
    // Вернуть пользователя к выбору количества игроков
    window.location.href = '/play';
  };

  const handleChooseThemeClick = () => {
    // Действия при нажатии на кнопку "Выбрать тему"
    // Возможно, вы хотите реализовать логику выбора темы здесь
  };

  const handleRandomThemeClick = () => {
    // Действия при нажатии на кнопку "Случайная тема"
    // Возможно, вы хотите реализовать логику выбора случайной темы здесь
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
    </div>
  );
}

export default SelectTheme;
