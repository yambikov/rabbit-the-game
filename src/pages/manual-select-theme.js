// manual-select-theme.js

import React from "react"
import themes from "../utils/themesData"
import {useNavigate} from "react-router-dom"
import {useGameContext} from "../context"
import backButtonImage from "../images/button-back.svg"

function ManualThemeSelection() {
  const {startGame, chooseRandomSubtheme} = useGameContext()
  const navigate = useNavigate()

  const handleThemeButtonClick = (themeType) => {
    // Начать игру с выбранной темой
    startGame(themeType)
    // Выбираем случайную подтему для темы
    chooseRandomSubtheme(themeType)
    // saveGameState(); // Сохранение состояния игры
    // Перенаправляем пользователя на страницу игрока
    navigate("/player")
  }
  

  const handleBackClick = () => {
    navigate("/select-theme")
  }

  // Функция для перемешивания массива
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
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
        <h2 className="page__title">Выбор темы</h2>
      </div>
      <div className="page__themes-container page__scrollable-content">
        {shuffle(Object.keys(themes)).map((themeType) => (
          <button
            className="button button__colour_purple button__theme"
            key={themeType}
            onClick={() => handleThemeButtonClick(themeType)}
          >
            {themeType}
          </button>
        ))}
      </div>
      <div></div> {/* Добавляем пустой div для выравнивания */}
    </div>
  )
}

export default ManualThemeSelection
