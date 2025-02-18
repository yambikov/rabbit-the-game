// app.js

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Rules from './pages/rules';
import Donate from './pages/donate';
import SelectPlayers from './pages/select-players';
import SelectTheme from './pages/select-theme';
import ManualSelectTheme from './pages/manual-select-theme';
import Player from './pages/player';
import NextPlayer from './pages/next-player';
import Finish from './pages/finish';
import { GameProvider } from './context'; // Импортируем провайдер

function App() {
  return (
    <Router>
      <GameProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/select-players" element={<SelectPlayers />} />
            <Route path="/select-theme" element={<SelectTheme />} />
            <Route path="/manual-select-theme" element={<ManualSelectTheme />} />
            <Route path="/player" element={<Player />} />
            <Route path="/next-player" element={<NextPlayer />} />
            <Route path="/finish" element={<Finish />} />
          </Routes>
      </GameProvider>
    </Router>
  );
}

export default App;
