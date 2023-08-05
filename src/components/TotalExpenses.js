import React from "react";

const TotalExpenses = ({ expenses }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.cost,
    0
  );

  return (
    <div>
      <h2>Total Expenses</h2>
      <p>${totalExpenses.toFixed(2)}</p> {/* Added $ sign */}
    </div>
  );
};

export default TotalExpenses;
