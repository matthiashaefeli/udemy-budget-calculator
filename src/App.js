import React from 'react';
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
  return (
    <>
      <Alert />
      <Form />
      <List />
    </>
  );
}

export default App;
