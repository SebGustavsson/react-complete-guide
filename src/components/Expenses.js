import './Expenses.css';
import ExpenseItem from './ExpenseItem'
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import React from 'react';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
        {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/> )}
      </Card>
    </div>
  );
}

export default Expenses;
