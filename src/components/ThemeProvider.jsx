/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
const DarkThemeContext = createContext();

const DarkThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <DarkThemeContext.Provider value={{ darkMode, toggleMode }}>
      {props.children}
    </DarkThemeContext.Provider>
  );
};
export { DarkThemeContext, DarkThemeProvider };
