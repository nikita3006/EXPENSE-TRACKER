import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";

function ExpenseItem(props) {
  const deleteExpenseHandler = () => {
    props.onDeleteExpense(props.id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* Add a delete button */}
      <button onClick={deleteExpenseHandler} className="expense-delete">
        Delete
      </button>
    </Card>
  );
}

export default ExpenseItem;
