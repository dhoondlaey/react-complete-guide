import { Card } from "../UI";
import ExpensionItem from "./ExpenseItem";
import "./styles/Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  let expenses = props.expenses;
  let year = expenses.map(item=>item.date.getFullYear());

  const [selectedYear, setSelectedYear] = useState(year[0]);

  const checkSelectedYear = (item) => {
    return selectedYear == item.date.getFullYear();
  };


  const onSelectedYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter availableYears={year} onSelectedYearHandler={onSelectedYearHandler} />
        {expenses.filter(checkSelectedYear).map((item) => {
          return (
            <ExpensionItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              id={item.id}
            ></ExpensionItem>
          );
        })}
        ;
      </Card>
    </div>
  );
};

export default Expense;
