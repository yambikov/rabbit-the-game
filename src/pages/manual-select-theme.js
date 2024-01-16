// manual-select-theme.js

import React from 'react';
import themes from '../components/themesData';
import { useNavigate } from'react-router-dom';

function ManualThemeSelection() {
  const navigate = useNavigate();
  const handleThemeButtonClick = () => {
    navigate('/player');
  };

  const handleBackClick = () => {
    navigate('/select-theme');

  };

  return (
    <div>
      <button onClick={handleBackClick}>Назад</button>
      <h2>Ручной выбор тем</h2>
      {Object.keys(themes).map((themeType) => (
        <button key={themeType} onClick={() => handleThemeButtonClick(themeType)}>
          {themeType}
        </button>
        
      ))}
    </div>
  );
}

export default ManualThemeSelection;
