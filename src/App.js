import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./data/ExpenseData";

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses item={ExpenseData} />
    </div>
  );
}

export default App;
