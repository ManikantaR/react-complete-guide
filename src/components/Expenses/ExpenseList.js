import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-lst__fallback">Found No expenses. </h2>;
  }
  return (
    <ul className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
