import { Card } from "../UI";
import "./styles/Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
  let expenses = props.expenses;
  let year = expenses.map((item) => item.date.getFullYear());
 
  const [selectedYear, setSelectedYear] = useState("2020");
  
  const filteredExpenses = expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === selectedYear;
  })

  const onSelectedYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          availableYears={year}
          onSelectedYearHandler={onSelectedYearHandler}
        />
       <ExpenseList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expense;
