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
  const displayTheme = currentPlayer?.name === "Заяц" ? "Ты заяц" : currentSubtheme

  const handleNextPlayerOrFinishGame = () => {
    if (currentPlayerIndex < numberOfPlayers - 1) {
      moveToNextPlayer()
      navigate("/player")
    } else {
      console.log(`navigate('/finish')`)
      navigate("/finish")
    }
  }

  const nextButtonText =
    currentPlayerIndex < numberOfPlayers - 1
      ? "Следующий игрок"
      : "Закончить раунд"

  return (
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
