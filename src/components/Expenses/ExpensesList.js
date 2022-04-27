import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {

    if(!props.items.length){
        return <h2 className="expenses-list__fallback">Found no Expenses.</h2>
    }

    return <ul className="expneses-list">
        {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
    </ul>
}

export default ExpensesList;