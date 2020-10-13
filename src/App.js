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
  const [alert, setAlert] = useState({show: false})
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)

  const handleCharge = e => {
    setCharge(e.target.value)
  }

  const handleAmount = e => {
    setAmount(e.target.value)
  }

  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text})
    setTimeout(() => {
      setAlert({show: false})
    }, 3000)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {

      if(edit) {
        let filteredExpenses = expenses.map(expense => {
          return expense.id === id ? {...expense, charge, amount} : expense
        })
        setExpenses(filteredExpenses)
        setEdit(false)
        handleAlert({type: 'success', text: 'Item edited'})
      } else {
        const singleExpense = {id: uuid(), charge, amount}
        setExpenses([...expenses, singleExpense])
        handleAlert({type: 'success', text: 'Item added'})
      }
      setCharge('')
      setAmount('')
    } else {
      handleAlert({type: 'danger', text: `charge can't be empty, amount has to be bigger than 0`})
    }
  }

  const handleClear = () => {
    setExpenses([])
    handleAlert({type: 'success', text: 'All items deleted'})
  }

  const handleDelete = (id) => {
    let filteredExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(filteredExpenses)
    handleAlert({type: 'success', text: 'Item deleted'})
  }

  const handleEdit = (id) => {
    let expense = expenses.find(expense => expense.id === id)
    setEdit(true)
    setCharge(expense.charge)
    setAmount(expense.amount)
    setId(id)
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className='App'>
        <Form
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <List
          expenses={expenses}
          handleClear={handleClear}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
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
