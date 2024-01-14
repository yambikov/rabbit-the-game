import React from 'react';
import themes from '../components/themesData';

function ManualThemeSelection() {
  const handleThemeButtonClick = (themeType) => {
    console.log(`Нажата кнопка выбора темы: ${themeType}`);
    // Здесь вы можете выполнить дополнительные действия при выборе темы
  };

  const handleBackClick = () => {
    // Вернуть пользователя к выбору количества игроков
    window.location.href = '/select-theme';
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
