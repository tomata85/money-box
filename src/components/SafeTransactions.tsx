import React from 'react'
import { ISafe } from '../types'
import Table from 'react-bootstrap/Table';
import { ToString } from '../utils'
import ReactTimeAgo from 'react-time-ago'

function SafeTransactions(props: {safe: ISafe}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>תאריך</th>
          <th>פעולה</th>
          <th>סכום</th>
          <th>סיבה</th>
        </tr>
        </thead>
        <tbody>
          {props.safe.transactions.map(tran => (
            <tr key={tran.timestamp}>
              <td>
                <ReactTimeAgo date={new Date(tran.timestamp)} locale="he-il"/>
              </td>
              <td>{ToString(tran.type)}</td>
              <td className="suppress-rtl">{tran.amount}</td>
              <td>{tran.reason}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  )
}

export default SafeTransactions;
