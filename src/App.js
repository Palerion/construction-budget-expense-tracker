import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpenses from "./components/TotalExpenses";
import BudgetForm from "./components/BudgetForm";
import BudgetTracker from "./components/BudgetTracker";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const handleRemoveExpense = (index) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense, i) => i !== index)
    );
  };

  const handleUpdateExpense = (index, updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense, i) => (i === index ? updatedExpense : expense))
    );
  };

  const handleSetBudget = (amount) => {
    setBudget(amount);
  };

  return (
    <div>
      <h1>Construction Budget & Expense Tracker</h1>
      <BudgetForm onSetBudget={handleSetBudget} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList
        expenses={expenses}
        onRemoveExpense={handleRemoveExpense}
        onUpdateExpense={handleUpdateExpense}
      />
      <TotalExpenses expenses={expenses} />
      <BudgetTracker
        budget={budget}
        totalExpenses={expenses.reduce(
          (total, expense) => total + expense.cost,
          0
        )}
      />
    </div>
  );
};

export default App;
