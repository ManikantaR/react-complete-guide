import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Jan 6 2022</div>
      <div className="expense-item__description">
        <h2>Car Expense</h2>
        <div className="expense-item__price">$240.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
