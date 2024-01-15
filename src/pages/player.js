import React from 'react';
import { useGameContext } from '../context';


function Player() {
  const { numberOfPlayers, players } = useGameContext();
  console.log(`Player in player.js numberOfPlayers: ${numberOfPlayers}, players: ${players}`);

  const handleBackClick = () => {
    window.history.back();
  };

  const handleOpenWordClick = () => {
    // Ваша логика для открытия слова
    console.log(`Игрок ${players.length} открывает слово`);
  };

  return (
    <div>
      <h2>Игрок</h2>
      <p>Количество игроков: {numberOfPlayers}</p>
      {players.map((player) => (
        <div key={player.id}>
          <p>Игрок {player.id}</p>
        </div>
      ))}
      <button onClick={handleBackClick}>Назад</button>
      <button onClick={handleOpenWordClick}>Открыть слово</button>
    </div>
  );
}

export default Player;
