import { todayStats } from "../data";
import "../styles/overviewstats.scss";
import OverviewStatCard from "./OverviewStatCard";

const OverviewStats = () => {
  return (
    <section className="overview__section">
      <h2 className="overview_headline">Overview - Today</h2>
      <div className="overview__grid">
        {todayStats.map((stat) => (
          <OverviewStatCard stat={stat} key={stat.main_stats} />
        ))}
      </div>
    </section>
  );
};

export default OverviewStats;
