import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

import "./NewExpense.css";
const NewExpense = (props) => {
  const [hideFilter, setHideFilter] = useState("true");

  const addExpenseHanlder = () => {
    setHideFilter("false");
  };
  const cancelExpenseHanlder = () => {
    setHideFilter("true");
  };
  const expenseDataAdded = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.addExpenseHandler(expenseData);
    setHideFilter("true");
  };

  if (hideFilter === "true") {
    return (
      <div className="new-expense">
        <div className="new-expense__actions">
          <button type="submit" onClick={addExpenseHanlder}>
            Add Expense
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onCancelHandler={cancelExpenseHanlder}
        onExpenseDataAdded={expenseDataAdded}
      />
    </div>
  );
};

export default NewExpense;
