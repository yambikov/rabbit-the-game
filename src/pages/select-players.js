import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../context';

function SelectPlayers() {
  const { numberOfPlayers, updateNumberOfPlayers } = useGameContext();
  const navigate = useNavigate();

  const handlePlayerSelection = () => {
    navigate('/select-theme');
    console.log(numberOfPlayers);
  };

  return (
    <div>
      <button onClick={() => navigate('/')}>Назад</button>
      <h2>Выбор количества игроков</h2>
      <label>
        Количество игроков:
        <input
          type="number"
          min="4"
          value={numberOfPlayers}
          onChange={(e) => updateNumberOfPlayers(Number(e.target.value))}
        />
      </label>
      {/* Добавьте свое игровое содержание здесь */}
      <button onClick={handlePlayerSelection}>Выбрать игроков</button>
    </div>
  );
}

export default SelectPlayers;
