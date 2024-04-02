import { useContext } from "react";
import { DarkThemeContext } from "./ThemeProvider";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

const Switch = () => {
  const { darkMode, toggleMode } = useContext(DarkThemeContext);
  const handleToggle = () => {
    toggleMode();
  };
  return (
    <span>
      {darkMode ? (
        <MoonIcon handleToggle={handleToggle} />
      ) : (
        <SunIcon handleToggle={handleToggle} />
      )}
    </span>
  );
};

export default Switch;
