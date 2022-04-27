import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('Year');
    const [filterSort, setFilterSort] = useState('Sort');

    const filterChangeYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filterChangeSortHandler = selectSort => {
        setFilterSort(selectSort);
    };

    const filteredExpenses = filteredYear === 'Year' ? props.item : props.item.filter((x) => x.date.getFullYear().toString() === filteredYear);
    if(filterSort === 'Asc') filteredExpenses.sort((x,y) => x.date.getTime() - y.date.getTime());
    if(filterSort === 'Desc') filteredExpenses.sort((x,y) => y.date.getTime() - x.date.getTime());

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedSort={filterSort} selectedYear={filteredYear} onChangeYearFilter={filterChangeYearHandler} onChangeSortFilter={filterChangeSortHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
