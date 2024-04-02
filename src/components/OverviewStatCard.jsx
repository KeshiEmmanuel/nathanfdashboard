/* eslint-disable react/prop-types */
import "../styles/overviewstats.scss";
import "../styles/stats.scss";
import { useContext } from "react";
import { DarkThemeContext } from "./ThemeProvider";
import { gsap } from "gsap";
const OverviewStatCard = ({ stat }) => {
  const { darkMode } = useContext(DarkThemeContext);
  gsap.fromTo(".overviewstatDark", { opacity: 0 }, { opacity: 1, duration: 2 });
  gsap.fromTo(".overviewstat", { opacity: 0 }, { opacity: 1, duration: 2 });
  gsap.fromTo(
    ".overview__growthstat",
    { opacity: 0, y: 100, duration: 1 },
    { opacity: 1, y: 0, duration: 1.5 }
  );
  return (
    <article className={darkMode ? `overviewstatDark` : `overviewstat`}>
      <div className="overview__textstat">
        <p>{stat.text}</p>
        {stat.icon}
      </div>
      <div className="overview__growthstat">
        <h1>{stat.stats}</h1>
        <div className="stat_growth">
          {stat.growth_icon}
          <small
            style={{
              color: `${stat.growth_color}`,
              fontWeight: "700",
            }}
          >
            {stat.main_stats}
          </small>
        </div>
      </div>
    </article>
  );
};

export default OverviewStatCard;
