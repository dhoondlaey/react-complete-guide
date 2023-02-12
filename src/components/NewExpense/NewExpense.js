import React, {useState} from "react";
import './styles/NewExpense.css';
import ExpenseForm  from "./ExpenseForm";

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    const [showExpenseForm,setShowExpenseForm] = useState(false);
    const onChangeState = () =>{
        setShowExpenseForm(true);
    }

    const hideExpenseForm = () =>{
        setShowExpenseForm(false);
    }
    
    return <div className="new-expense">
        {!showExpenseForm && <button onClick={onChangeState}>Add New Expense</button>}
        {showExpenseForm && <ExpenseForm  onChangeState={hideExpenseForm}  onSaveExpenseData={saveExpenseDataHandler} />}
        
    </div>
}

export default NewExpense;