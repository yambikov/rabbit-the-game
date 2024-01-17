import React, { createContext, useContext, useState } from 'react';
import themes from './components/themesData'; // Убедитесь, что путь к themesData.js правильный

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(4);
  const [players, setPlayers] = useState([]);
  const [currentTheme, setCurrentTheme] = useState('');
  const [currentSubtheme, setCurrentSubtheme] = useState('');
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const updateNumberOfPlayers = (newNumberOfPlayers) => {
    setNumberOfPlayers(newNumberOfPlayers);
  };

  const updatePlayers = (newPlayers) => {
    setPlayers(newPlayers);
  };

  const startGame = (theme) => {
    setCurrentTheme(theme);
    chooseRandomSubtheme(theme); // Выбираем случайную подтему при старте игры
    setGameStarted(true);
  };

  const chooseRandomSubtheme = (theme) => {
    const subthemes = themes[theme];
    const randomSubtheme = subthemes[Math.floor(Math.random() * subthemes.length)];
    setCurrentSubtheme(randomSubtheme);
  };

  const getCurrentPlayer = () => {
    return players[currentPlayerIndex] || null;
  };

  const moveToNextPlayer = () => {
    if (currentPlayerIndex < numberOfPlayers - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      endGame();
    }
  };

  const endGame = () => {
    setCurrentPlayerIndex(0);
    setGameStarted(false);
    setCurrentTheme('');
    setCurrentSubtheme(''); // Сброс подтемы в конце игры
  };

  return (
    <GameContext.Provider
      value={{
        numberOfPlayers,
        players,
        currentTheme,
        currentSubtheme,
        currentPlayerIndex,
        gameStarted,
        updateNumberOfPlayers,
        updatePlayers,
        startGame,
        getCurrentPlayer,
        moveToNextPlayer,
        endGame,
        chooseRandomSubtheme // Добавляем эту функцию в контекст
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};

export default GameContext;
