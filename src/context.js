import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(4);
  const [players, setPlayers] = useState([]);

  const updateNumberOfPlayers = (newNumberOfPlayers) => {
    setNumberOfPlayers(newNumberOfPlayers);
  };

  const updatePlayers = (newPlayers) => {
    setPlayers(newPlayers);
  };

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
