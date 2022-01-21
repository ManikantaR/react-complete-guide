import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) =>{
    const expenseDataAdded= (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random.toString()
        };
        console.log(expenseData);
        props.addExpenseHandler(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onExpenseDataAdded={expenseDataAdded}/>
        </div>
    );
};

export default NewExpense;