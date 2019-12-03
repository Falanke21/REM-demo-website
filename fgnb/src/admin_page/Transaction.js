import React from "react";
import { TableRow, TableCell, IconButton, Input } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SubmitIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

import { updateTransaction, deleteTransaction } from "../utils/transaction";

class Transaction extends React.Component {
    state = {
        id: "",
        bidding: "",
        finalPrice: 0,
        time: "",
        isEditing: false
    };

    toggleIsEditing = () => {
        const t = this.props.transaction;
        const cur = this.state.isEditing;
        this.setState({
            id: t._id,
            bidding: t.bidding,
            finalPrice: t.finalPrice,
            time: t.time,
            isEditing: !cur
        });
    };

    sumbitChange = () => {
        const { id, finalPrice } = this.state;
        const data = { finalPrice };
        this.toggleIsEditing();
        updateTransaction(id, data);
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
        const { transaction } = this.props;
        // console.log(transaction);
        if (this.state.isEditing) {
            return (
                <TableRow key={transaction.id}>
                    <TableCell align="center" style={{ width: "20%" }}>
                        <IconButton onClick={this.sumbitChange}>
                            <SubmitIcon />
                        </IconButton>
                        <IconButton onClick={this.toggleIsEditing}>
                            <CancelIcon />
                        </IconButton>
                    </TableCell>
                    <TableCell
                        component="th"
                        scope="row"
                        align="right"
                        style={{ width: "25%" }}
                    >
                        {transaction._id}
                    </TableCell>
                    <TableCell align="right" style={{ width: "25%" }}>
                        {transaction.bidding}
                    </TableCell>
                    <TableCell align="right" style={{ width: "10%" }}>
                        <Input
                            name="finalPrice"
                            value={this.state.finalPrice}
                            onChange={this.handleChange}
                            type="number"
                            // placeholder={parseInt(transaction.finalPrice)}
                        />
                    </TableCell>
                    <TableCell align="right" style={{ width: "20%" }}>
                        {transaction.time}
                    </TableCell>
                </TableRow>
            );
        } else {
            return (
                <TableRow key={transaction.id}>
                    <TableCell align="center" style={{ width: "20%" }}>
                        <IconButton onClick={this.toggleIsEditing}>
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            onClick={e =>
                                deleteTransaction(this.props.transaction._id)
                            }
                        >
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                    <TableCell
                        component="th"
                        scope="row"
                        align="right"
                        style={{ width: "25%" }}
                    >
                        {transaction._id}
                    </TableCell>
                    <TableCell align="right" style={{ width: "25%" }}>
                        {transaction.bidding}
                    </TableCell>
                    <TableCell align="right" style={{ width: "10%" }}>
                        {transaction.finalPrice}
                    </TableCell>
                    <TableCell align="right" style={{ width: "20%" }}>
                        {transaction.time}
                    </TableCell>
                </TableRow>
            );
        }
    }
}

export default Transaction;
