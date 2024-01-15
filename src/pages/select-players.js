import React from 'react';
import { useGameContext } from '../context';

function SelectPlayers() {
  const { numberOfPlayers, updateNumberOfPlayers } = useGameContext();

  const handleBackClick = () => {
    window.location.href = '/';
  };

  const handleNextClick = () => {
    window.location.href = '/select-theme';
  };

  const handlePlayerChange = (event) => {
    const count = parseInt(event.target.value, 10);
    updateNumberOfPlayers(count);
  };

  return (
    <div>
      <button onClick={handleBackClick}>Назад</button>
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
      <button onClick={handleNextClick}>Далее</button>
    </div>
  );
}

export default SelectPlayers;
