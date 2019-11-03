import React from "react";
import {
    Grid,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    IconButton,
    Input,
    Paper
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Transaction from "./Transaction";
import { withStyles } from "@material-ui/styles";

const ContainedPaper = withStyles({
    root: {
        width: "90%",
        maxWidth: 1000,
        margin: "auto",
        padding: 20
    }
})(Paper);

function createTranx(id, from, to) {
    return { id, from, to };
}

class TransactionList extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            from: "",
            to: "",
            data: [
                createTranx(0, "user1", "user2"),
                createTranx(1, "user2", "user1")
            ]
        };
    }

    addTransaction = () => {
        let transactions = this.state.data;
        if (
            transactions.filter(t => {
                return t.id === this.state.id;
            }).length > 0
        ) {
            alert("Invalid ID");
        } else {
            transactions.push(
                createTranx(this.state.id, this.state.from, this.state.to)
            );
            this.setState({
                data: transactions
            });
        }
    };

    updateTransaction = (transaction, id, from, to) => {
        const newList = this.state.data.map(t => {
            if (t.id === transaction.id) {
                return {
                    id: id,
                    from: from,
                    to: to
                };
            } else {
                return t;
            }
        });
        this.setState({
            data: newList
        });
    };

    removeTransaction = transaction => {
        const toKeep = this.state.data.filter(t => {
            return t.id !== transaction.id;
        });
        this.setState({
            data: toKeep
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
        const transactionList = this.state.data;
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={1}>
                        <IconButton onClick={this.addTransaction}>
                            <AddIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={2}>
                        <Input
                            name="id"
                            value={this.state.id}
                            onChange={this.handleChange}
                            type="number"
                            placeholder="ID"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Input
                            name="from"
                            value={this.state.from}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="From"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Input
                            name="to"
                            value={this.state.to}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="To"
                        />
                    </Grid>
                </Grid>
                <ContainedPaper>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Actions</TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">From</TableCell>
                                <TableCell align="right">To</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactionList.map(transaction => {
                                return (
                                    <Transaction
                                        key={transaction.id}
                                        transaction={transaction}
                                        updateTransaction={
                                            this.updateTransaction
                                        }
                                        removeTransaction={
                                            this.removeTransaction
                                        }
                                    />
                                );
                            })}
                        </TableBody>
                    </Table>
                </ContainedPaper>
            </div>
        );
    }
}

export default TransactionList;
