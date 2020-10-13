import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert'
import Form from './components/Form'
import List from './components/List'
import uuid from 'uuid/v4'

const initalExpenses = [
  {id: uuid(), charge: 'rent', amount: 100},
  {id: uuid(), charge: 'food', amount: 300},
  {id: uuid(), charge: 'ha', amount: 50}
]

function App() {
  const [expenses, setExpenses] = useState(initalExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')

  const handleCharge = e => {
    setCharge(e.target.value)
  }

  const handleAmount = e => {
    setAmount(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = {id: uuid(), charge, amount}
      setExpenses([...expenses, singleExpense])
      setCharge('')
      setAmount('')
    } else {
      // handle alert
    }


    
  }

  const handleDelete = () => {
    setExpenses([])
  }

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className='App'>
        <Form
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit} />
        <List expenses={expenses} handleDelete={handleDelete} />
      </main>
      <h1>total spending:
        <span className='total'>
          $ {expenses.reduce((acc, curr) => {
            return acc += parseInt(curr.amount)
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
