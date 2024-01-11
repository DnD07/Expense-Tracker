import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transactions from "./Transactions";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transactions) => (
          <Transactions key = {transactions.id} transactions = {transactions}/>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
