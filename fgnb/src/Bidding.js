import React from "react";
import { TableRow, TableCell, IconButton, Input } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SubmitIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
class Bidding extends React.Component {
    state = {
        id: "",
        from: "",
        to: "",
        isEditing: false
    };
    accept = () =>{
        alert("Accept")
    };
    decline = () =>{
        alert("Decline");
    }
    render() {
        const {
            transaction,
            updateTransaction,
            removeTransaction
        } = this.props;
            return (
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  CSC309
                </TableCell>
                <TableCell align="right">30</TableCell>
                <TableCell align="right">
                    <IconButton onClick={this.accept}>
                        Accept
                    </IconButton>
                    <IconButton onClick={this.decline}>
                        Decline
                    </IconButton>
                </TableCell>
              </TableRow>
            );
    }
}

export default Bidding;