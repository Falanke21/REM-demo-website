import React from 'react';
import { TableRow, TableCell, IconButton, Input } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SubmitIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';

class Transaction extends React.Component {
  state = {
    isEditing: false
  };

  toggleIsEditing = () => {
    const cur = this.state.isEditing;
    this.setState({
      isEditing: !cur
    });
  };

  render() {
    const { 
      transaction, updateTransaction, removeTransaction
    } = this.props;
    const sumbitChange = () => {
      this.toggleIsEditing();
      updateTransaction.bind(this, transaction)();
    }

    if (this.state.isEditing) {
      return (
        <TableRow key={transaction.id}>
          <TableCell align='center'>
            <IconButton onClick={sumbitChange}>
              <SubmitIcon/>
            </IconButton>
            <IconButton onClick={this.toggleIsEditing}>
              <CancelIcon/>
            </IconButton>
          </TableCell>
            <TableCell component='th' scope='row' align='right'>
              <Input/>
            </TableCell>
            <TableCell align='right'>
              {transaction.from}
            </TableCell>
            <TableCell align='right'>
              {transaction.to}
            </TableCell>
          </TableRow>
      );
    } else {
      return (
        <TableRow key={transaction.id}>
          <TableCell align='center'>
            <IconButton onClick={this.toggleIsEditing}>
              <EditIcon/>
            </IconButton>
            <IconButton onClick={removeTransaction.bind(this, transaction)}>
              <DeleteIcon/>
            </IconButton>
          </TableCell>
            <TableCell component='th' scope='row' align='right'>{transaction.id}</TableCell>
            <TableCell align='right'>{transaction.from}</TableCell>
            <TableCell align='right'>{transaction.to}</TableCell>
          </TableRow>
      );
    }
  }
}

export default Transaction;