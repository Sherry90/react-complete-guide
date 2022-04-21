import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./data/ExpenseData";

const App = () => {
    const addExpenseHandler = expense => {
        console.log('In App');
        console.log(expense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={ExpenseData}/>
        </div>
    );
}

export default App;
