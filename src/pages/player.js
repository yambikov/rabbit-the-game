// player.js

import {useGameContext} from "../context"
import {useNavigate} from "react-router-dom"

function Player() {
  const {getCurrentPlayer, gameStarted} = useGameContext()

  const navigate = useNavigate()
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
