import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map(transactions => transactions.amount)
  const total = amount.reduce((acc, item) => (acc += item), 0 ).toFixed(2);
  return (
    <>
    <h5>Balance</h5>
    <h2 id='balance'>${total}</h2>
    </>
  )
}

export default Balance