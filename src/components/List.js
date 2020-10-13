import React from 'react'
import Item from './Item'
import {MdDelete} from 'react-icons/md'

const List = ({expenses, handleDelete}) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense) => {
          return <Item key={expense.id} expense={expense} />
        })}
      </ul>
      {expenses.length > 0 && <button className='btn' onClick={handleDelete}>
        clear expenses
        <MdDelete className='btn-icon' />
        </button>}
    </>
  )
}

export default List;