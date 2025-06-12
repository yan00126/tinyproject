import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark"
  ).matches;
  console.log(prefersDarkMode);
  return prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("corgi");
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  });
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
