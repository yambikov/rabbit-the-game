// donate.js

import React from "react"
import {useNavigate} from "react-router-dom"
import avatarImage from "../images/avatar.jpg"
import tgIcon from "../images/tg-icon.svg"
import vkIcon from "../images/vk-icon.svg"
import backButtonImage from "../images/button-back.svg"

function Donate() {
  const navigate = useNavigate()

  const handleDonateClickSber = () => {
    window.open(
      "https://messenger.online.sberbank.ru/sl/3EGCVzFTYudCHdy3r",
      "_blank"
    )
  }

  const handleDonateClickTinkoff = () => {
    window.open("https://www.tinkoff.ru/cf/ATUcqxcURqp", "_blank")
  }

  const handleClickSocialTg = () => {
    window.open("https://t.me/yambikov", "_blank")
  }

  const handleClickSocialVk = () => {
    window.open("https://vk.com/yambikov", "_blank")
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
        <h2 className="page__title">На путешествие</h2>
      </div>
      <div className="donate__about-container">
        <img
          className="donate__avatar"
          src={avatarImage}
          alt="Автор проекта стоит на фоне гор и держит на вытянутых вверх руках велосипед"
        />
        <p className="donate__avatar-captions">Разработчик: Виктор Ямбиков</p>
        <ul className="donate__social-icons">
          <li onClick={handleClickSocialTg}>
            <img className="donate__social-icon" src={tgIcon} alt="Telegram" />
          </li>
          <li onClick={handleClickSocialVk}>
            <img className="donate__social-icon" src={vkIcon} alt="Vkontakte" />
          </li>
        </ul>
      </div>
      <div className="page__buttons-container">
        <button
          className="button button__small button__color_sber"
          onClick={handleDonateClickSber}
        >
          Сбер
        </button>
        <button
          className="button button__small button__color_tinkoff"
          onClick={handleDonateClickTinkoff}
        >
          Тинькофф
        </button>
      </div>
    </div>
  )
}

export default Donate
