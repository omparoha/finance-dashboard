import { Card } from "../UI";

const Stats = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <Card>
      <h3>Stats</h3>
      <p>Total Transactions: {transactions.length}</p>
      <p>Income: ₹{income}</p>
      <p>Expense: ₹{expense}</p>
    </Card>
  );
};

export default Stats;