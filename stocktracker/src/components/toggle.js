import React, { useState, useEffect } from 'react';

function Toggle() {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkMode ? 'dark' : 'light');
      }, []);
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className={`App-header-${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default Toggle;