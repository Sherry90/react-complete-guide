import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./data/ExpenseData";

const App = () => {
    const [expenses, setExepnses] = useState(ExpenseData);

    const addExpenseHandler = expense => {
        setExepnses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses}/>
        </div>
    );
}

export default App;
