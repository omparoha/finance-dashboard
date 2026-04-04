import SummaryCard from "./SummaryCard";
import BalanceChart from "./BalanceChart";
import CatagoryChart from "./CatagoryChart";

const Dashboard = ({ transactions }) => {
  return (
    <div>
      <SummaryCard transactions={transactions} />

      <div style={{ display: "flex", gap: "20px" }}>
        <BalanceChart transactions={transactions} />
        <CatagoryChart transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;