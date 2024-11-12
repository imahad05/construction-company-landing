import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Check if a theme is saved in localStorage, otherwise default to 'light'
  const savedTheme = localStorage.getItem("themeMode");
  const [themeMode, setThemeMode] = useState(savedTheme || "light");

  // Update the theme class on the document root whenever the themeMode changes
  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the theme in localStorage whenever it changes
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const value = { themeMode, setThemeMode };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  return useContext(AppContext);
};
