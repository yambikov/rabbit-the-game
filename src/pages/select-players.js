import React from "react"
import {useNavigate} from "react-router-dom"
import {useGameContext} from "../context"
import backButtonImage from "../images/button-back.svg"

function SelectPlayers() {
  const {numberOfPlayers, updateNumberOfPlayers, updatePlayers} =
    useGameContext()

  const navigate = useNavigate()

  const handlePlayerSelection = () => {
    // Создаем массив игроков
    const playersArray = Array.from({length: numberOfPlayers}, (_, index) => ({
      id: index + 1,
      name: "Пассажир",
    }))

    // Выбираем случайным образом игрока и помечаем его как "Заяц"
    const rabbitIndex = Math.floor(Math.random() * numberOfPlayers)
    playersArray[rabbitIndex].name = "Заяц"
    // saveGameState();
    // Обновляем массив игроков в контексте
    updatePlayers(playersArray)
    // Обновляем количество игроков в контексте
    updateNumberOfPlayers(numberOfPlayers)

    // Переходим на следующую страницу
    navigate("/select-theme")
  }

  // Функция для увеличения количества игроков
  const incrementPlayers = () => {
    updateNumberOfPlayers(numberOfPlayers + 1)
  }

  // Функция для уменьшения количества игроков
  const decrementPlayers = () => {
    if (numberOfPlayers > 4) {
      updateNumberOfPlayers(numberOfPlayers - 1)
    }
  }

  const handleBackClick = () => {
    // Вернуть пользователя на домашнюю страницу
    navigate("/")
  }

  return (
    <div className="page">
      <div className="page__content-container">
        <button className="button__back" onClick={handleBackClick}>
          <img
            className="button__back_small"
            src={backButtonImage}
            alt="Назад"
          />
        </button>
        <h2 className="page__title">Количество игроков</h2>
      </div>
      <span className="select-players__number">{numberOfPlayers}</span>
      <div className="select-players__buttons-container">
        <button
          className={`button button__colour_green button__round ${
            numberOfPlayers <= 4 ? "button__disabled" : ""
          }`}
          onClick={decrementPlayers}
          disabled={numberOfPlayers <= 4}
        >
          -
        </button>
        <button
          className="button button__colour_purple button__round"
          onClick={incrementPlayers}
        >
          +
        </button>
      </div>

      <button
        className="button button__small button__colour_yellow button__single"
        onClick={handlePlayerSelection}
      >
        Далее
      </button>
    </div>
  )
}

export default SelectPlayers
