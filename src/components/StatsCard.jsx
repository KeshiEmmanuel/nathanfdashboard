/* eslint-disable react/prop-types */
import "../styles/stats.scss";
import { useContext } from "react";
import { DarkThemeContext } from "./ThemeProvider";
import { gsap } from "gsap";
const StatsCard = ({ stat }) => {
  const { darkMode } = useContext(DarkThemeContext);
  gsap.fromTo(".stat", { opacity: 0 }, { opacity: 1, duration: 2 });

  gsap.fromTo(".statLight", { opacity: 0 }, { opacity: 1, duration: 2 });
  // animate ".class" from an opacity of 0 and a y position of 100 (like transform: translateY(100px))
  // to the current values (an opacity of 1 and y position of 0).
  gsap.fromTo(
    ".stat__follower",
    { opacity: 0, y: 100, duration: 1 },
    { opacity: 1, y: 0, duration: 1.5 }
  );
  gsap.fromTo(
    ".stat_growth",
    { opacity: 0, x: 100, duration: 1 },
    { opacity: 1, x: 0, duration: 1.5 }
  );
  return (
    <article
      className={darkMode ? "stat" : "stat statLight"}
      style={{
        borderTopColor: `${stat.border_color}`,
        borderTopWidth: "3px",
        borderTopStyle: "solid",
      }}
    >
      <span className="stats__user">
        {stat.icon} {stat.userName}
      </span>
      <div className="stat__stats">
        <h1 className="stat__follower">{stat.followers}</h1>
        <p className="stats__followers">followers</p>
      </div>
      <div className="stat_growth">
        {stat.growth_icon}
        <small
          className="stat__dailystats"
          style={{
            color: `${stat.growth_color}`,
          }}
        >
          {stat.daily_stats}
        </small>
      </div>
    </article>
  );
};

export default StatsCard;
