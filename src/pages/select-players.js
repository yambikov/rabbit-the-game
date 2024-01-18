import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../context';

function SelectPlayers() {
  const {
    numberOfPlayers,
    updateNumberOfPlayers,
    updatePlayers,
 // Обратите внимание, что вы уже импортировали navigate
  } = useGameContext();
  const navigate = useNavigate();

  const handlePlayerSelection = () => {
    // Создаем массив игроков
    const playersArray = Array.from({ length: numberOfPlayers }, (_, index) => ({
      id: index + 1,
      name: 'Пассажир',
    }));

    // Выбираем случайным образом игрока и помечаем его как "Заяц"
    const rabbitIndex = Math.floor(Math.random() * numberOfPlayers);
    playersArray[rabbitIndex].name = 'Заяц';
    // saveGameState();
    // Обновляем массив игроков в контексте
    updatePlayers(playersArray);
    // Обновляем количество игроков в контексте
    updateNumberOfPlayers(numberOfPlayers);

    // Переходим на следующую страницу
    navigate('/select-theme');
  };


  return (
    <div>
      <button onClick={() => navigate('/')}>Назад</button>
      <h2>Выбор количества игроков</h2>
      <label>
        Количество игроков:
        <input
          id="name"
          type="number"
          min="4"
          autoComplete="off"
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
