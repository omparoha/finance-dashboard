import TopCategory from "./TopCategory";
import Stats from "./Stats";

const Insight = ({ transactions }) => {
  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
      <TopCategory transactions={transactions} />
      <Stats transactions={transactions} />
    </div>
  );
};

export default Insight;