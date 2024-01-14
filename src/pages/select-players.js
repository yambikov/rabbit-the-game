import React, { useState } from 'react';

function SelectPlayers() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(4);

  const handleBackClick = () => {
    // Вернуть пользователя на домашнюю страницу
    window.location.href = '/';
  };

  const handleNextClick = () => {
    // Направить пользователя на следующую страницу
    window.location.href = '/select-theme';
  };

  const handlePlayerChange = (event) => {
    // Обработчик изменения количества игроков
    setNumberOfPlayers(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <h2>Выберите количество игроков:</h2>
      <label>
        Количество игроков:
        <select value={numberOfPlayers} onChange={handlePlayerChange}>
          {[...Array(9)].map((_, index) => (
            <option key={index + 4} value={index + 4}>
              {index + 4}
            </option>
          ))}
        </select>
      </label>
      {/* Добавьте свое игровое содержание здесь */}
      <button onClick={handleBackClick}>Назад</button>
      <button onClick={handleNextClick}>Далее</button>
    </div>
  );
}

export default SelectPlayers;
