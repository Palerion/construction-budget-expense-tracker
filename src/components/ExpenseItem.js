import React, { useState } from "react";

const ExpenseItem = ({ expense, index, onRemoveExpense, onUpdateExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedExpense, setUpdatedExpense] = useState(expense);

  const handleUpdate = (event) => {
    event.preventDefault();
    onUpdateExpense(index, updatedExpense);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={updatedExpense.name}
            onChange={(e) =>
              setUpdatedExpense({ ...updatedExpense, name: e.target.value })
            }
          />
          <input
            type="number"
            value={updatedExpense.cost}
            onChange={(e) =>
              setUpdatedExpense({
                ...updatedExpense,
                cost: Number(e.target.value),
              })
            }
          />
          <input
            type="date"
            value={updatedExpense.date}
            onChange={(e) =>
              setUpdatedExpense({ ...updatedExpense, date: e.target.value })
            }
          />
          <button type="submit">Update Expense</button>
        </form>
      ) : (
        <>
          <h2>{expense.name}</h2>
          <p>${expense.cost.toFixed(2)}</p>
          <p>{expense.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onRemoveExpense(index)}>Remove</button>
        </>
      )}
    </div>
  );
};

export default ExpenseItem;
