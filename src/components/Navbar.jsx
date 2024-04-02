import { useContext } from "react";
import Switch from "./Switch";
import "../styles/navbar.scss";
import { DarkThemeContext } from "./ThemeProvider";
import { gsap } from "gsap";
const Navbar = () => {
  const { darkMode } = useContext(DarkThemeContext);
  gsap.fromTo(
    ".navbar__title",
    { opacity: 0, y: -100, duration: 1 },
    { opacity: 1, y: 0, duration: 1.5 }
  );
  gsap.fromTo(
    ".navbar__stats",
    { opacity: 0, x: -100, duration: 1 },
    { opacity: 1, x: 0, duration: 1.5 }
  );
  return (
    <nav className="navbar">
      <aside className="navbar__textbox">
        <h2 className="navbar__title">Social Media Dashboard</h2>
        <p className="navbar__stats">Total Followers: 23,004</p>
      </aside>
      <aside className="switch__wrapper">
        <p className="switch__mode">{darkMode ? `Dark` : `Light`} Mode</p>
        <Switch />
      </aside>
    </nav>
  );
};

export default Navbar;
