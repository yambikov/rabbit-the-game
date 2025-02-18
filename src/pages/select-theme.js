// select-theme.js
import React, {useState, useEffect} from "react"
import themes from "../utils/themesData"
import {useGameContext} from "../context"
import {useNavigate} from "react-router-dom"
import backButtonImage from "../images/button-back.svg"

function ChooseTheme() {
  const [selectedTheme, setSelectedTheme] = useState(null)
  const navigate = useNavigate()
  const {startGame, chooseRandomSubtheme} = useGameContext()

  // Используйте useEffect для выбора случайной темы при монтировании компонента
  useEffect(() => {
    handleRandomThemeClick()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Пустой массив зависимостей означает, что эффект будет выполнен только при монтировании

  const handleBackClick = () => {
    // Вернуть пользователя к выбору количества игроков
    navigate("/select-players")
  }

  const handleChooseThemeClick = () => {
    navigate("/manual-select-theme")
  }

  const handleRandomThemeClick = () => {
    // Выбрать случайную тему
    const allThemes = Object.keys(themes)
    let randomThemeType

    do {
      randomThemeType = allThemes[Math.floor(Math.random() * allThemes.length)]
    } while (randomThemeType === selectedTheme)

    // Установить выбранную тему в состояние
    setSelectedTheme(randomThemeType)
  }

  // Внутри handleStartGameClick в select-theme.js

  const handleStartGameClick = () => {
    startGame(selectedTheme) // Начать игру с выбранной темой
    chooseRandomSubtheme(selectedTheme) // Выбираем случайную подтему
    navigate("/player")
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
        <h2 className="page__title">Тема</h2>
      </div>
      <span className="page__selected-theme">{selectedTheme}</span>
      <div className="page__buttons-container">
        <button
          className="button button__small button__colour_purple"
          onClick={handleRandomThemeClick}
        >
          Случайная тема
        </button>
        <button
          className="button button__small button__colour_green"
          onClick={handleChooseThemeClick}
        >
          Выбрать тему
        </button>
        <button
          className="button button__small button__colour_yellow"
          onClick={handleStartGameClick}
        >
          Начать игру
        </button>
      </div>
    </div>
  )
}

export default ChooseTheme
