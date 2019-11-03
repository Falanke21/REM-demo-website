import React from "react";
import { TableRow, TableCell, IconButton, Input } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SubmitIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

class Transaction extends React.Component {
    state = {
        id: "",
        from: "",
        to: "",
        isEditing: false
    };

    toggleIsEditing = () => {
        const t = this.props.transaction;
        const cur = this.state.isEditing;
        this.setState({
            id: t.id,
            from: t.from,
            to: t.to,
            isEditing: !cur
        });
    };

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };

    render() {
        const {
            transaction,
            updateTransaction,
            removeTransaction
        } = this.props;
        const sumbitChange = () => {
            this.toggleIsEditing();
            updateTransaction.bind(this, transaction)(
                this.state.id,
                this.state.from,
                this.state.to
            );
        };

        if (this.state.isEditing) {
            return (
                <TableRow key={transaction.id}>
                    <TableCell align="center">
                        <IconButton onClick={sumbitChange}>
                            <SubmitIcon />
                        </IconButton>
                        <IconButton onClick={this.toggleIsEditing}>
                            <CancelIcon />
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                        <Input
                            name="id"
                            value={this.state.id}
                            onChange={this.handleChange}
                            type="number"
                            placeholder={transaction.id.toString()}
                        />
                    </TableCell>
                    <TableCell align="right">
                        <Input
                            name="from"
                            value={this.state.from}
                            onChange={this.handleChange}
                            type="text"
                            placeholder={transaction.from}
                        />
                    </TableCell>
                    <TableCell align="right">
                        <Input
                            name="to"
                            value={this.state.to}
                            onChange={this.handleChange}
                            type="text"
                            placeholder={transaction.to}
                        />
                    </TableCell>
                </TableRow>
            );
        } else {
            return (
                <TableRow key={transaction.id}>
                    <TableCell align="center">
                        <IconButton onClick={this.toggleIsEditing}>
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            onClick={removeTransaction.bind(this, transaction)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                        {transaction.id}
                    </TableCell>
                    <TableCell align="right">{transaction.from}</TableCell>
                    <TableCell align="right">{transaction.to}</TableCell>
                </TableRow>
            );
        }
    }
}

export default Transaction;
