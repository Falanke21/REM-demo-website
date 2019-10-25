import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Transaction from './Transaction.js';

function createTranx(id, from, to) {
  return { id, from, to };
}

class TransactionList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        createTranx(0, "user1", "user2"),
        createTranx(1, "user2", "user1")
      ]
    };
  }

  addTransaction = () => {

  };

  updateTransaction = (transaction, id, from, to) => {
    const newList = this.state.data.map((t) => {
      if (t.id === transaction.id) {
        return {
          id: id,
          from: from,
          to: to
        };
      } else {
        return t;
      }
    })
    this.setState({
      data: newList
    });
  };

  removeTransaction = (transaction) => {
    const toKeep = this.state.data.filter((t) => {
      return t.id !== transaction.id;
    });
    this.setState({
      data: toKeep
    });
  };

  render() {
    const transactionList = this.state.data;
    return (
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Actions</TableCell>
            <TableCell align='right'>ID</TableCell>
            <TableCell align='right'>From</TableCell>
            <TableCell align='right'>To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            transactionList.map((transaction) => {
              return (
                <Transaction 
                  key={transaction.id}
                  transaction={transaction}
                  updateTransaction={this.updateTransaction}
                  removeTransaction={this.removeTransaction}
                />
              );
            })
          }
        </TableBody>
      </Table>
    );
  }
}

export default TransactionList;