import { Card } from "../UI";

const SummaryCard = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      
      <Card>
        <h3>Balance</h3>
        <p>₹{balance}</p>
      </Card>

      <Card>
        <h3>Income</h3>
        <p>₹{income}</p>
      </Card>

      <Card>
        <h3>Expense</h3>
        <p>₹{expense}</p>
      </Card>

    </div>
  );
};

export default SummaryCard;