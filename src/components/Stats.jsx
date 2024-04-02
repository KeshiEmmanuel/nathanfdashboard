import { followerStats } from "../data";
import "../styles/stats.scss";
import StatsCard from "./StatsCard";
const Stats = () => {
  return (
    <section className="stat-grid">
      {followerStats.map((stats) => (
        <StatsCard key={stats.followers} stat={stats} />
      ))}
    </section>
  );
};

export default Stats;
