// donate.js

import React from "react"
import {useNavigate} from "react-router-dom"
import avatarImage from '../images/avatar.jpg';

function Donate() {
  const navigate = useNavigate()

  const handleDonateClickSber = () => {
    window.open("https://messenger.online.sberbank.ru/sl/3EGCVzFTYudCHdy3r", "_blank");
  };

  const handleDonateClickTinkoff = () => {
    window.open("https://www.tinkoff.ru/cf/ATUcqxcURqp", "_blank");
  };

  const handleBackClick = () => {
    // Вернуть пользователя на домашнюю страницу
    navigate("/")
  }

  return (
    <div className="page__container brd">
      <button onClick={handleBackClick}>Назад</button>
      <h2 className="page__title">На путешествие</h2>
      <div className="page__about-container">
        <img className='page__avatar' src={avatarImage} alt="Автор проекта стоит на фоне гор и держит на вытянутых руках велосипед" />
        <p className="page__avatar-captions">Разработчик: Виктор Ямбиков</p>
        <ul className="page__social-icons">
          <li></li>
          <li></li>
        </ul>
      </div>
      <button onClick={handleDonateClickSber}>Сбер</button>
      <button onClick={handleDonateClickTinkoff}>Тинькофф</button>
    </div>
  )
}

export default Donate
