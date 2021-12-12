import React from "react";
import { Wrapper } from "./ExpenseTrackerStyled";
const handleSubmit = (e) => {
  e.prevent.default();
};
const ExpenseTracker = () => {
  return (
    <Wrapper>
      <h1>Expense Tracker</h1>
      <form onsubmit={handleSubmit}>
        <label>
          What did you buy today?
          <input type="text" />
        </label>
        <label>
          Cost
          <input type="number" />
          <button type="submit">Add Expense</button>
        </label>
      </form>
    </Wrapper>
  );
};

export default ExpenseTracker;
