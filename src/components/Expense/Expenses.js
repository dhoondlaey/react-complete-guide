import {Card} from "../UI";
import ExpensionItem from "./ExpenseItem";
import './styles/Expenses.css'
import React from 'react';

const Expense = (props) => {
   let expenses= props.expenses
  return (
    <Card className="expenses">
      <ExpensionItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        id={expenses[0].id} 
      ></ExpensionItem>

      <ExpensionItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        id={expenses[1].id}
      ></ExpensionItem>
    </Card>
  )
}

export default Expense;
