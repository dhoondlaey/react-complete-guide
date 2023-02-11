import React from "react";
import "./styles/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  let availableYears = [...new Set(props.availableYears)];

  const selectValueHandler = (event) => {
    props.onSelectedYearHandler(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectValueHandler}>
          {availableYears.map((item) => {
            return <option value={item}>{item}</option>
          })};
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
