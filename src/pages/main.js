// main.js

import React from 'react';
import { useGameContext } from '../context';
import { useNavigate } from 'react-router-dom';
import rabbitImage from '../images/Rabbit.jpg';

function Main() {

  const { resetGame } = useGameContext();
  const navigate = useNavigate();

  const handlePlayClick = () => {
    resetGame();
    // saveGameState();

    navigate('/select-players');
  };


  return (
    <div className='test brd'>
    </div>
    // <div className='main'>
    //   <h2 className='main__header'>Шпион</h2>
    //   <img className="main__img" src={rabbitImage} alt="rabbit" />
    //   <div className="main__buttons-container">
    //     <button className="button button__big button__colour_purple" onClick={() => navigate('/rules')}>Правила</button>
    //     {/* <button className="button button__big button__colour_green" onClick={() => navigate('/donate', '_blank')}>Донат</button> */}
    //     <button className="button button__big button__colour_green" onClick={() => window.open('/#/donate', '_blank')}>Донат</button>
    //     <button className="button button__big button__colour_yellow" onClick={handlePlayClick}>Играть</button>
    //   </div>
    // </div>
  );
}

export default Main;
