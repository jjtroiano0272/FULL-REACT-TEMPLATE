import React, { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Style declarations
  const darkFontColor = '#fff';
  const darkBgColor = '#333';
  const darkPrimaryColor = '';
  const darkSecondaryColor = '';
  const darkHeadingColor = '';
  // Light Declarations
  const lightFontColor = '#333';
  const lightBgColor = '#fff';
  const lightPrimaryColor = '';
  const lightSecondaryColor = '';
  const lightHeadingColor = '';

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDarkMode(isDark);

    // TODO: This would be lovely with a more elegant approach!
    // If it's light mode, remove *-dark classes.
    if (!darkMode) {
      document.querySelector('nav').classList.remove('navbar-dark');
      document
        .querySelector('input.form-control')
        .classList.remove('search-dark');
      document.getElementById('nav-logo').classList.remove('color-invert');
      document.body.style.color = lightFontColor;
      document.body.style.backgroundColor = lightBgColor;
    } else {
      document.querySelector('nav').classList.add('navbar-dark');
      document.querySelector('input.form-control').classList.add('search-dark');
      document.getElementById('nav-logo').classList.add('color-invert');
      document.body.style.color = darkFontColor;
      document.body.style.backgroundColor = darkBgColor;
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    localStorage.setItem('dark', JSON.stringify(isDark));
    setDarkMode(isDark);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
