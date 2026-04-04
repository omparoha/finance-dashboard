import React, { useState } from "react";
import { Card, Button, Input, Select } from "../UI";

const TransactionForm = ({ onAdd, role }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [type, setType] = useState("income");

  const handleSubmit = () => {
    if (!amount) return;

    const newTransaction = {
      id: Date.now(),
      amount: Number(amount),
      category,
      type,
      date: new Date().toLocaleDateString(),
    };

    onAdd(newTransaction);
    setAmount("");
  };

  // 🔐 Role-based UI
  if (role !== "admin") {
    return null; // viewer cannot see form
  }

  return (
    <Card>
      <h2>Add Transaction</h2>

      <div className="form-group">
        <Input
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            { label: "Food", value: "food" },
            { label: "Salary", value: "salary" },
            { label: "Shopping", value: "shopping" },
          ]}
        />
      </div>

      <div className="form-group">
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={[
            { label: "Income", value: "income" },
            { label: "Expense", value: "expense" },
          ]}
        />
      </div>

      <Button onClick={handleSubmit}>Add Transaction</Button>
    </Card>
  );
};

export default TransactionForm;