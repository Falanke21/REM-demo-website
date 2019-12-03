import React from "react";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import Transaction from "./Transaction";
import StateReactComponent from "../component/StateReactComponent";
import { getAllTransactions } from "../utils/transaction";

const ContainedPaper = withStyles({
    root: {
        width: "90%",
        maxWidth: 1080,
        marginTop: 20,
        margin: "auto",
        padding: 20
    }
})(Paper);

class TransactionList extends StateReactComponent {
    componentWillMount() {
        super.componentWillMount();
        getAllTransactions();
    }

    filterState({ adminTransactionList }) {
        return { transactionList: adminTransactionList };
    }

    render() {
        const { transactionList } = this.state;
        return (
            <div>
                <ContainedPaper>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Actions</TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Bidding</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactionList.map(transaction => {
                                return (
                                    <Transaction
                                        key={transaction._id}
                                        transaction={transaction}
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
