// rules.js

import React, { useState } from 'react';

function Rules() {
  const [rulesContent] = useState(`
    Правило 1: ...
    Правило 2: ...
    Правило 3: ...
    // Добавьте свои правила здесь
  `);

  const handleOkayClick = () => {
    // Вернуть пользователя на домашнюю страницу
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Правила игры</h2>
      <pre>{rulesContent}</pre>
      <button onClick={handleOkayClick}>Окей</button>
    </div>
  );
}

export default Rules;
