// context.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import themes from './components/themesData';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(4);
  const [players, setPlayers] = useState([]);
  const [currentTheme, setCurrentTheme] = useState('');
  const [currentSubtheme, setCurrentSubtheme] = useState('');
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // Восстановление состояния из сессионного хранилища при монтировании
    const savedState = sessionStorage.getItem('gameState');
    if (savedState) {
      const state = JSON.parse(savedState);
      setNumberOfPlayers(state.numberOfPlayers);
      setPlayers(state.players);
      setCurrentTheme(state.currentTheme);
      setCurrentSubtheme(state.currentSubtheme);
      setCurrentPlayerIndex(state.currentPlayerIndex);
      setGameStarted(state.gameStarted);
    }
  }, []);

  const saveGameState = () => {
    const state = {
      numberOfPlayers,
      players,
      currentTheme,
      currentSubtheme,
      currentPlayerIndex,
      gameStarted,
    };
    sessionStorage.setItem('gameState', JSON.stringify(state));
  };

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

  // Функция для сброса игры
  const resetGame = () => {
    setCurrentPlayerIndex(0); // Сброс текущего индекса игрока
    setGameStarted(false); // Установить состояние начала игры в false
    setCurrentTheme(''); // Сброс текущей темы
    setCurrentSubtheme(''); // Сброс текущей подтемы
    // ... и любые другие состояния, которые нужно сбросить
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
        chooseRandomSubtheme,
        resetGame,
        saveGameState
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
