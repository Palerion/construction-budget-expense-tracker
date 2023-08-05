import React from "react";

const BudgetTracker = ({ budget, totalExpenses }) => {
  const remainingBudget = budget - totalExpenses;

  return (
    <div>
      <h2>Remaining Budget</h2>
      <p>${remainingBudget.toFixed(2)}</p> {/* Added $ sign */}
    </div>
  );
};

export default BudgetTracker;
