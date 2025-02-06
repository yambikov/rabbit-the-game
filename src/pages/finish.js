// finish.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../context';

const Finish = () => {
  let navigate = useNavigate();
  const { resetGame} = useGameContext();

  const handleHomeClick = () => {
    resetGame();
    // saveGameState();
    navigate('/');
  };

  return (
        <div className="page">
        <div></div> {/*Для выравнивания*/}
        <div className="page__content-container">
          <h2 className="page__title">Раунд закончен</h2>
        </div>
        <div className="page__buttons-container">
          <button 
          className="button button__small button__colour_yellow"
          onClick={handleHomeClick}>Начать обсуждение</button>
        </div>
      </div>
  );
};

export default Finish;


