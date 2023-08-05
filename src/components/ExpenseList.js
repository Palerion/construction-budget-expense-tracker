import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onRemoveExpense, onUpdateExpense }) => (
  <div>
    {expenses.map((expense, index) => (
      <ExpenseItem
        key={index}
        index={index}
        expense={expense}
        onRemoveExpense={onRemoveExpense}
        onUpdateExpense={onUpdateExpense}
      />
    ))}
  </div>
);

export default ExpenseList;
