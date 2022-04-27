import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const editingHandelr = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  return (
      <div className='new-expense'>
        {!isEditing && <button onClick={editingHandelr}>Add new Expense</button>}
        {isEditing && <ExpenseForm onCancle={editingHandelr} onSaveExpenseData={saveExpenseDataHandler} />}
      </div>
  );
};

export default NewExpense;
