import React, { useState, useEffect } from 'react';
import Expenses from './components/EXPENSE/Expenses';
import NewExpense from './components/NewExpense/NewExpense';



function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);

    localStorage.setItem('expenses', JSON.stringify(updatedExpense));
  };

  const deleteExpenseHandler = (expenseId) => {

    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);

   
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <div>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
