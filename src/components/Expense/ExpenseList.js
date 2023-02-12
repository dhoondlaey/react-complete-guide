import React from "react";
import ExpensionItem from "./ExpenseItem";
import './styles/ExpenseList.css';
const ExpenseList = (Props) => {
  let expenses = Props.expenses;
   
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((item) => {
        return (
          <ExpensionItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          ></ExpensionItem>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
