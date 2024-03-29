// donate.js

import React from 'react';

function Donate() {
  const handleDonateClick = () => {
    // Перенаправить пользователя на страницу доната
    window.location.href = 'ссылка_на_ваш_сервис_доната';
  };

  const handleBackClick = () => {
    // Вернуть пользователя на домашнюю страницу
    window.location.href = '/';
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
