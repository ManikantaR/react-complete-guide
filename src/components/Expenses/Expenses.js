import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import Card from "..//UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const expenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == filteredYear
  );
  console.log(expenses);
  console.log(filteredYear);
  const expensesFilterChanged = (year) => {
    setFilteredYear(year);
    console.log(year);
  };

  return (
    <div>
      <ExpensesFilter
        filteredYear={filteredYear}
        onExpensesFilterChanged={expensesFilterChanged}
      />
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
