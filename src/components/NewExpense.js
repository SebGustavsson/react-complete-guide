import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={}/>
    </div> 
};

export default NewExpense;