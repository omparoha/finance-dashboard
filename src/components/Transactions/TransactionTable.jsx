import React, { useState } from "react";
import { Card, Input, Select, Badge, EmptyState } from "../UI";

const TransactionTable = ({ transactions }) => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  // 🔍 Filter logic
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      filterType === "all" || t.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <Card>
      <h2>Transactions</h2>

      {/* 🔹 Search + Filter */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        
        <Input
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          options={[
            { label: "All", value: "all" },
            { label: "Income", value: "income" },
            { label: "Expense", value: "expense" },
          ]}
        />
      </div>

      {/* 🔹 Table */}
      {filteredTransactions.length === 0 ? (
        <EmptyState message="No transactions found" />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>₹{t.amount}</td>
                <td>{t.category}</td>
                <td>
                  <Badge type={t.type} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Card>
  );
};

export default TransactionTable;