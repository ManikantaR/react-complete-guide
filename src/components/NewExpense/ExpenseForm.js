import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const enteredTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const enteredAmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const enteredDateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onCancelHandler = (event) => {
    event.preventDefault();
    props.onCancelHandler();
  };

  const addExpenseHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.length > 0) {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      props.onExpenseDataAdded(expenseData);
    }
  };

  return (
    <form onSubmit={addExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={enteredTitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={enteredAmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={enteredDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={onCancelHandler}>
          cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
      <div className="new-expense__actions"></div>
    </form>
  );
};

export default ExpenseForm;
