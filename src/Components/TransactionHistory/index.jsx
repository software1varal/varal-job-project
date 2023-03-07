import "./index.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";

import Appbar from "../../Shared/Navbar/Appbar";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import SearchInput from "./SearchInput";
import Table from "./Table";
import { trxnHistoryList } from "../../mockData";

function TransactionHistory() {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <>
      <Appbar />
      <Container>
        <div className="trxn-history-container">
          <p className="trxn-title">Transaction History</p>
          <div className="table-action">
            <Row>
              <Col>
                <SearchInput
                  label="Search"
                  placeholder="Search"
                  name="search"
                  showIcon={true}
                />
              </Col>
              <Col className="datepicker-container">
              <DateRangePicker 
              onChange={onChange} value={value}
              clearIcon={null} />
              </Col>
            </Row>
          </div>

          <div className="table-container">
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
                {trxnHistoryList.map((trxn, index) => {
                  let statusColor =
                    trxn.status === "Sent"
                      ? "#34DA26"
                      : trxn.status === "Pending"
                      ? "#F3B412"
                      : "#DA2626";
                  return (
                    <tr className="bg-white" key={trxn.transactionId}>
                      <td>{trxn.transactionId}</td>
                      <td style={{ textAlign: "left" }}>
                        03/03/24
                        <br />
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
        </div>
      </Container>
    </>
  );
}

export default TransactionHistory;
