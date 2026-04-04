import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Insights from "./components/Insights/Insight";
import TransactionForm from "./components/Transactions/TransactionForm";
import TransactionTable from "./components/Transactions/TransactionTable";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [role, setRole] = useState("admin");
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>

      <h1>💰 Finance Dashboard</h1>

      {/* Controls */}
      <div style={{ marginBottom: "20px" }}>
        <label>Role: </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ marginLeft: "10px" }}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      <Dashboard transactions={transactions} />
      <Insights transactions={transactions} />
      <TransactionForm onAdd={handleAddTransaction} role={role} />
      <TransactionTable transactions={transactions} />

    </div>
  );
}

export default App;