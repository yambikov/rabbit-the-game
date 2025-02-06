// next-player.js
import React from "react"
import {useGameContext} from "../context"
import {useNavigate} from "react-router-dom"

function NextPlayer() {
  const {
    getCurrentPlayer,
    currentSubtheme,
    moveToNextPlayer,
    numberOfPlayers,
    currentPlayerIndex,
  } = useGameContext()

  const navigate = useNavigate()

  const currentPlayer = getCurrentPlayer()
  const displayTheme = currentPlayer?.name === "Заяц" ? "Заяц" : currentSubtheme

  const handleNextPlayerOrFinishGame = () => {
    if (currentPlayerIndex < numberOfPlayers - 1) {
      moveToNextPlayer()
      // saveGameState();
      navigate("/player")
    } else {
      console.log(`navigate('/finish')`)
      navigate("/finish")
    }
  }

  const nextButtonText =
    currentPlayerIndex < numberOfPlayers - 1
      ? "Следующий игрок"
      : "Закончить игру"

  return (
    // <div>
    //   <p>Имя игрока: {currentPlayer?.name}</p>
    //   <p>ID игрока: {currentPlayer?.id}</p>
    //   <p>Тема для игрока: {displayTheme}</p>
    //   <button onClick={handleNextPlayerOrFinishGame}>{nextButtonText}</button>
    // </div>
    <div className="page">
      <div className="page__content-container">
        <h2 className="page__title">Слово</h2>
      </div>
      <span className="page__selected-theme">{displayTheme}</span>
      <div className="page__buttons-container">
        <button
          className="button button__small button__colour_yellow"
          onClick={handleNextPlayerOrFinishGame}
        >
          {nextButtonText}
        </button>
      </div>
    </div>
  )
}

export default NextPlayer
