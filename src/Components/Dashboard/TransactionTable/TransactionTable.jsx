import React from 'react'
import './TransactionTable.css'
import {trxnHistoryList} from '../../../mockData'
import Table from '../../TransactionHistory/Table'
import { NavLink } from 'react-router-dom'

function TransactionTable() {
  return (
    <div className='trxn-table-container'>
        <div className="transaction-heading">
        Transaction History
        <span className="view-all-link">
        <NavLink to="/transaction-history">View all</NavLink>
        </span>
        </div>
        
            <Table>
              <thead>
                {[
                  "Transation Id",
                  "Date",
                  "Amount",
                  "Status",
                  "Transaction Method",
                ].map((header, index) => (
                  <th key={header+index}>{header}</th>
                ))}
              </thead>
              <tbody>
                {trxnHistoryList.slice(0,3).map((trxn, index) => {
                  let statusColor =
                    trxn.status === "Sent"
                      ? "#34DA26"
                      : trxn.status === "Pending"
                      ? "#F3B412"
                      : "#DA2626";
                  return (
                    <tr className="mobile-font" key={trxn.transactionId}>
                      <td>{trxn.transactionId}</td>
                      <td style={{ textAlign: "left" }}>
                        03/03/2023<br/>
                        <span className="trxn-time">4:43pm</span>
                      </td>
                      <td>{trxn.amount}</td>
                      <td style={{ color: statusColor, fontWeight: 500 }}>
                        {trxn.status}
                      </td>
                      <td>{trxn.transactionMethod}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            </div>

  )
}

export default TransactionTable