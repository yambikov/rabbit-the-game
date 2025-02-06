// player.js
// import React, { useEffect } from 'react';
import {useGameContext} from "../context"
import {useNavigate} from "react-router-dom"

function Player() {
  const {
    getCurrentPlayer,
    gameStarted,
    // numberOfPlayers,
    // currentPlayerIndex,
    // endGame
  } = useGameContext()

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!gameStarted) {
  //     // saveGameState();
  //     // console.log(`gameStarted: ${gameStarted}`);
  //     navigate('/finish');
  //   }
  // }, [gameStarted, currentPlayerIndex, numberOfPlayers, navigate, endGame]);

  // const handleNextPlayerOrFinishGame = () => {
  //   if (currentPlayerIndex < numberOfPlayers - 1) {
  //     moveToNextPlayer();
  //     // saveGameState();
  //     navigate('/player');
  //   } else {
  //     console.log(`navigate('/finish')`);
  //     navigate('/finish');
  //   }
  // };

  const currentPlayer = getCurrentPlayer()

  const handleOpenWordClick = () => {
    navigate("/next-player")
  }

  if (!gameStarted) {
    return null
  }

  console.log(`currentPlayer: ${currentPlayer}`)

  return (
    <div className="page">
      <div></div> {/*Для выравнивания*/}
      <div className="page__content-container">
        <h2 className="page__hero">Игрок {currentPlayer?.id}</h2>
      </div>
      <div className="page__buttons-container">
        <button
          className="button button__small button__colour_yellow"
          onClick={handleOpenWordClick}
        >
          Открыть слово
        </button>
      </div>
    </div>
  )
}

export default Player
