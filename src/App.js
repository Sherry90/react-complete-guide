import Expenses from "./components/Expenses/Expenses";
import ExpenseData from "./data/ExpenseData";

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={ExpenseData} />
    </div>
  );
}

export default App;
