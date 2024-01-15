import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(4);

  const updateNumberOfPlayers = (count) => {
    setNumberOfPlayers(count);
  };

  return (
    <GameContext.Provider value={{ numberOfPlayers, updateNumberOfPlayers }}>
      {children}
    </GameContext.Provider>
  );
};
