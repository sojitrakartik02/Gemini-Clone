import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.className = darkTheme ? 'dark-theme' : 'light-theme';
  }, [darkTheme]);

  const toggleDarkTheme = () => {
    console.log('Toggle dark theme');
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    console.log('Dark theme:', !darkTheme); // Log the updated darkTheme state
  };
  

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
