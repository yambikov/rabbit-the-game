// donate.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Donate() {
  const navigate = useNavigate();
  const handleDonateClick = () => {
    // Перенаправить пользователя на страницу доната
    window.location.href = 'https://www.tinkoff.ru/cf/9yxpoIlkDJH';
  };

  const handleBackClick = () => {
    // Вернуть пользователя на домашнюю страницу
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleBackClick}>Назад</button>
      <h2>Поддержите нас!</h2>
      <p>Ваша поддержка поможет нам развиваться.</p>
      <button onClick={handleDonateClick}>Сделать донат</button>
    </div>
  );
}

export default Donate;
