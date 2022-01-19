import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React,{useState} from 'react';
import Card from "..//UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

const expenses = props.expenses;
const [filteredYear,setFilteredYear] = useState('2020');
 const expensesFilterChanged = (year)=>{
   setFilteredYear(year);
   console.log( year);
 }

 return (
  <div>
    <ExpensesFilter filteredYear={filteredYear} onExpensesFilterChanged={expensesFilterChanged}/>
  <Card className="expenses">
    <ExpenseItem
      title={expenses[0].title}
      date={expenses[0].date}
      amount={expenses[0].amount}
    />

    <ExpenseItem
      title={expenses[1].title}
      date={expenses[1].date}
      amount={expenses[1].amount}
    />

    <ExpenseItem
      title={expenses[2].title}
      date={expenses[2].date}
      amount={expenses[2].amount}
    />

    <ExpenseItem
      title={expenses[3].title}
      date={expenses[3].date}
      amount={expenses[3].amount}
    />
  </Card>
  </div>
);
}

export default Expenses;