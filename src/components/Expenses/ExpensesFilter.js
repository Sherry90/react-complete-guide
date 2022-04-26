import React from "react";
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
    const dropdownChangeYearHandler = (event) => {
        event.preventDefault();
        props.onChangeYearFilter(event.target.value);
    };

    const dropDownChangeSortHandler = (event) => {
        event.preventDefault();
        props.onChangeSortFilter(event.target.value);
    };

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                    <div>
                        <select className="selectYear" value={props.selectedYear} onChange={dropdownChangeYearHandler}>
                            <option value='Year'>Year</option>
                            <option value='2022'>2022</option>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
                            <option value='2019'>2019</option>
                        </select>
                        <select className="selectSort" value={props.selectedSort} onChange={dropDownChangeSortHandler} >
                            <option value='Sort'>Sort</option>
                            <option value='Desc'>Desc</option>
                            <option value='Asc'>Asc</option>
                        </select>
                    </div>

            </div>
        </div>
    )

};

export default ExpensesFilter;