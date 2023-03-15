import React from 'react'
import { trxnHistoryList } from '../../../mockData';
import Table from '../../TransactionHistory/Table';
import './JobTabTable.css'

function JobTabTable() {
  return (
    <div className='job-table-container'>
        <div className='job-table-tabs'>
            <div className="job-heading-1">
            Recently Applied
            <div class='selected-tab'></div>
            </div>
            <div className="job-heading-2">
            Recommended
            </div>
        </div>
        
        
        
            <Table>
              <thead>
                {[
                  "Company Name",
                  "Job Title",
                  "Date Applied",
                  "Status",
                ].map((header, index) => (
                  <th key={header+index}>{header}</th>
                ))}
              </thead>
              <tbody>
                {trxnHistoryList.slice(0,3).map((job, index) => {
                  let statusColor =
                    job.status === "Active"
                      ? "#34DA26"
                      : "#DA2626";
                  return (
                    <tr key={job.id}>
                      <td>{job.companyName}</td>
                      <td >
                        {job.jobTitle}
                      </td>
                      <td>{job.date}</td>
                      <td style={{ color: statusColor, fontWeight: 500 }}>
                        {job.status}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            </div>
  )
}

export default JobTabTable