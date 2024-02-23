import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#add", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  const toogleTheme = () => {
    setTheme((prevState) => ({
      ...prevState,
      isLightTheme: !prevState.isLightTheme,
    }));
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;