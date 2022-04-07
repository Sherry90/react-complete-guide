import './ExpensiveItem.css';

const ExpenseItem = () => {
    return (
        <div className ="expense-item" >
            <div>April 07th 2022</div>
            <div className="expense-item__description ">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$295</div>
            </div>
        </div>
    )
}

export default ExpenseItem;