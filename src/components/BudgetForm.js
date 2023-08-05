import React, { useState } from "react";

const BudgetForm = ({ onSetBudget }) => {
  const [budget, setBudget] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSetBudget(Number(budget));
    setBudget("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Budget"
        required
      />
      <button type="submit">Set Budget</button>
    </form>
  );
};

export default BudgetForm;
