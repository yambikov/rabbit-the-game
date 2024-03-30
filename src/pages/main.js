// main.js

import React from 'react';
import { useGameContext } from '../context';
import { useNavigate } from 'react-router-dom';
import spyImage from '../images/spy.jpg';

function Main() {

  const { resetGame } = useGameContext();
  const navigate = useNavigate();

  const handlePlayClick = () => {
    resetGame();
    // saveGameState();

    navigate('/select-players');
  };


  return (
    <div className='page'>
      <h1 className='page__hero'>Шпион</h1>
      <img className="page__img" src={spyImage} alt="Шпион" />
      <div className="page__buttons-container">
        <button className="button button__small button__colour_purple" onClick={() => navigate('/rules')}>Правила</button>
        <button className="button button__small button__colour_green" onClick={() => navigate('/donate')}>Донат</button>
        <button className="button button__small button__colour_yellow" onClick={handlePlayClick}>Играть</button>
      </div>
    </div>
  );
}

export default Main;
