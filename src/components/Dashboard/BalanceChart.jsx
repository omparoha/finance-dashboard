import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card } from "../UI";

const BalanceChart = ({ transactions }) => {
  let balance = 0;

  const data = transactions.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return {
      date: t.date,
      balance,
    };
  });

  return (
    <Card>
      <h3>Balance Trend</h3>

      <LineChart width={400} height={200} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="balance" />
      </LineChart>
    </Card>
  );
};

export default BalanceChart;