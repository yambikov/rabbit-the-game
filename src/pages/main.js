import React from 'react';

function Home() {
  return (
    <div>
      <h2>Стартовый экран</h2>
      <button onClick={() => window.location.href = '/rules'}>Правила</button>
      <button onClick={() => window.location.href = '/donate'}>Донат</button>
      <button onClick={() => window.location.href = '/select-players'}>Играть</button>
    </div>
  );
}

export default Home;
