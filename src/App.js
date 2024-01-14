import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/main';
import Rules from './pages/rules';
import Donate from './pages/donate';
import SelectPlayers from './pages/select-players';
import SelectTheme from './pages/select-theme';
import ManualSelectTheme from './pages/manual-select-theme';
import Player from './pages/player';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;


/*
/src
  /components
    /Common          # Общие компоненты, которые могут использоваться в разных частях приложения
    /Feature1        # Компоненты, связанные с конкретной функциональностью (например, формы, списки)
    /Feature2
  /containers        # Контейнеры, которые связаны с маршрутизацией и стейт-менеджментом
  /pages             # Компоненты, представляющие отдельные страницы приложения
  /services          # Утилиты и сервисы для работы с внешними данными или API
  /styles            # Стили, общие для всего приложения
  /utils             # Вспомогательные утилиты и функции
  App.js             # Основной компонент приложения
  index.js           # Точка входа в приложение

*/