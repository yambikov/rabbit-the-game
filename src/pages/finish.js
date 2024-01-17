// finish.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Finish = () => {
  let navigate = useNavigate();

  const handleHomeClick = () => {
    // Здесь должен быть ваш путь к домашней странице, например '/'
    navigate('/');
  };

  return (
    <div>
      <h1>Игра окончена!</h1>
      <button onClick={handleHomeClick}>Домой</button>
    </div>
  );
};

export default Finish;


