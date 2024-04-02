import { useContext } from "react";
import { DarkThemeContext } from "./ThemeProvider";
import Navbar from "./Navbar";
import "../styles/layout.scss";
import Stats from "./Stats";
import OverviewStats from "./OverviewStats";
const Layout = () => {
  const { darkMode } = useContext(DarkThemeContext);
  return (
    <div className={darkMode ? `wrapperDark` : `wrapper`}>
      <div className={darkMode ? `containerDark` : `container`}>
        <Navbar />
        <Stats />
        <OverviewStats />
      </div>
    </div>
  );
};

export default Layout;
