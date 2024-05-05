import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpensesFilter from "./components/ExpensesFilter";
import ExpenseForm from "./components/ExpenseForm";

export const categories = ["Utilities", "Groceries", "Entertainment"];

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 2, category: "Utilities" },
    { id: 2, description: "bbb", amount: 2, category: "Groceries" },
    { id: 3, description: "ccc", amount: 2, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const onDelete = (id: number) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);

    setExpenses(newExpenses);
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div>
        <div className="mb-2">
          <ExpensesFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => onDelete(id)}
        />
      </div>
    </>
  );
}

export default App;
