import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  if (!props.items || props.items.length === 0) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date)}
          onDeleteExpense={() => props.onDeleteExpense(expense.id)}
        />
      ))}
    </ul>
  );
};

export default Expenses;
