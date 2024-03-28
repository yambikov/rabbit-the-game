import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../context';

function SelectPlayers() {
  const {
    numberOfPlayers,
    updateNumberOfPlayers,
    updatePlayers,
  } = useGameContext();

  const navigate = useNavigate();

  const handlePlayerSelection = () => {
    // Создаем массив игроков
    const playersArray = Array.from({ length: numberOfPlayers }, (_, index) => ({
      id: index + 1,
      name: 'Пассажир',
    }));

    // Выбираем случайным образом игрока и помечаем его как "Шпион"
    const rabbitIndex = Math.floor(Math.random() * numberOfPlayers);
    playersArray[rabbitIndex].name = 'Шпион';
    // saveGameState();
    // Обновляем массив игроков в контексте
    updatePlayers(playersArray);
    // Обновляем количество игроков в контексте
    updateNumberOfPlayers(numberOfPlayers);

    // Переходим на следующую страницу
    navigate('/select-theme');
  };

  
    // Функция для увеличения количества игроков
    const incrementPlayers = () => {
      updateNumberOfPlayers(numberOfPlayers + 1);
    };
  
    // Функция для уменьшения количества игроков
    const decrementPlayers = () => {
      if (numberOfPlayers > 4) {
        updateNumberOfPlayers(numberOfPlayers - 1);
      }
    };


    return (
      <div>
        <button onClick={() => navigate('/')}>Назад</button>
        <h2>Выбор количества игроков</h2>
        <div>
          <button onClick={decrementPlayers} disabled={numberOfPlayers <= 4}>-</button>
          <span>{numberOfPlayers}</span>
          <button onClick={incrementPlayers}>+</button>
        </div>
        <button onClick={handlePlayerSelection}>Выбрать игроков</button>
      </div>
    );
  }
  
  export default SelectPlayers;
