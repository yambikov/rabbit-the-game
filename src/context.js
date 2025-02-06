import React, { createContext, useContext, useState, useEffect } from 'react';
import themes from './utils/themesData';

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
      console.log('page updated');
      console.log(state);
    } else {
      console.log('do nothing');
    }
  }, []);

  const updateNumberOfPlayers = (newNumberOfPlayers) => {
    setNumberOfPlayers(newNumberOfPlayers);

  };

  const updatePlayers = (newPlayers) => {
    setPlayers(newPlayers);
  };

  useEffect(() => {
    saveGameState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfPlayers, players, currentTheme, currentSubtheme, currentPlayerIndex, gameStarted]);




  const chooseRandomSubtheme = (theme) => {
    const subthemes = themes[theme];
    const randomSubtheme = subthemes[Math.floor(Math.random() * subthemes.length)];
    setCurrentSubtheme(randomSubtheme);
  };

  const getCurrentPlayer = () => {
    return players[currentPlayerIndex] || null;
  };

  console.log(`currentPlayerIndex: ${getCurrentPlayer()}`);

  const moveToNextPlayer = () => {
    if (currentPlayerIndex < numberOfPlayers - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      endGame();
    }
  };

  const startGame = (theme) => {
    setCurrentTheme(theme);
    chooseRandomSubtheme(theme);
    setGameStarted(true);
  };


  const endGame = () => {
  };

  const resetGame = () => {
    console.log('resetGame');
    sessionStorage.removeItem('gameState');
    setNumberOfPlayers(4);
    setPlayers([]);
    setCurrentTheme('');
    setCurrentSubtheme('');
    setCurrentPlayerIndex(0);
    setGameStarted(false);

  };

  const saveGameState = () => {
    if (gameStarted) {
      const state = {
        numberOfPlayers,
        players,
        currentTheme,
        currentSubtheme,
        currentPlayerIndex,
        gameStarted,
      };
      sessionStorage.setItem('gameState', JSON.stringify(state));
    }
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
