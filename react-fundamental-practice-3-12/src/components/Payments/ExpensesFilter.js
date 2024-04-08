import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    const selectedRange = event.target.value;
    props.onChangeFilter(selectedRange); // 선택한 range 전달
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by range (1-100)</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="1-20">1-20</option>
          <option value="21-40">21-40</option>
          <option value="41-60">41-60</option>
          <option value="61-80">61-80</option>
          <option value="81-100">81-100</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
