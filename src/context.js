// context.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(4);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // При монтировании компонента, проверяем наличие сохраненных игроков в локальном хранилище
    const storedPlayers = JSON.parse(localStorage.getItem('players'));
    if (storedPlayers) {
      setPlayers(storedPlayers);
      setNumberOfPlayers(storedPlayers.length);
    }
  }, []);

  const updateNumberOfPlayers = (newNumberOfPlayers) => {
    setNumberOfPlayers(newNumberOfPlayers);
  };

  const updatePlayers = (newPlayers) => {
    setPlayers(newPlayers);
  };

  // При обновлении игроков, также сохраняем их в локальное хранилище
  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  console.log(`GameProvider numberOfPlayers: ${numberOfPlayers}, players: ${players}`);

  return (
    <GameContext.Provider value={{ numberOfPlayers, players, updateNumberOfPlayers, updatePlayers }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
