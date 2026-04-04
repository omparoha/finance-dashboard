import { PieChart, Pie, Tooltip } from "recharts";
import { Card } from "../UI";

const CatagoryChart = ({ transactions }) => {
  const catagoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      catagoryMap[t.catagory] =
        (catagoryMap[t.category] || 0) + t.amount;
    }
  });

  const data = Object.keys(catagoryMap).map((key) => ({
    name: key,
    value: catagoryMap[key],
  }));

  return (
    <Card>
      <h3>Expense Breakdown</h3>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" />
        <Tooltip />
      </PieChart>
    </Card>
  );
};

export default CatagoryChart;