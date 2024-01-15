import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/main';
import Rules from './pages/rules';
import Donate from './pages/donate';
import SelectPlayers from './pages/select-players';
import SelectTheme from './pages/select-theme';
import ManualSelectTheme from './pages/manual-select-theme';
import Player from './pages/player';
import { GameProvider } from './context'; // Импортируем провайдер

function App() {
  return (
    <Router>
      <GameProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/select-players" element={<SelectPlayers />} />
            <Route path="/select-theme" element={<SelectTheme />} />
            <Route path="/manual-select-theme" element={<ManualSelectTheme />} />
            <Route path="/player" element={<Player />} />
          </Routes>
        </div>
      </GameProvider>
    </Router>
  );
}

export default App;
