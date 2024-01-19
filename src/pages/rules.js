// rules.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Rules() {
  const navigate = useNavigate();
  const [rulesContent] = useState(`
    Правило 1: ...
    Правило 2: ...
    Правило 3: ...
    // Добавьте свои правила здесь
  `);

  const handleOkayClick = () => {
    // Вернуть пользователя на домашнюю страницу
    navigate('/');
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
