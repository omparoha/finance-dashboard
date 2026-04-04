import { Card } from "../UI";

const TopCategory = ({ transactions }) => {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const topCategory = Object.keys(categoryMap).reduce(
    (a, b) =>
      categoryMap[a] > categoryMap[b] ? a : b,
    Object.keys(categoryMap)[0]
  );

  return (
    <Card>
      <h3>Top Spending Category</h3>
      <p>{topCategory || "No data"}</p>
    </Card>
  );
};

export default TopCategory;