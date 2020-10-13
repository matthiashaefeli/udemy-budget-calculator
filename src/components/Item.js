import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'

const Item = ({expense}) => {
  const {id, charge, amount} = expense

  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{charge}</span>
        <span className='amount'>${amount}</span>
      </div>
      <div>
        <button className='edit-btn' arial-label='edit'>
          <MdEdit />
        </button>
        <button className='clear-btn' arial-label='delete'>
          <MdDelete />
        </button>
      </div>
    </li>
  )
}

export default Item;