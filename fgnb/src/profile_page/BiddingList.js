import React from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "../navigation/Navigation";
import Bidding from "./Bidding";
import {
    Grid,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    IconButton,
    Input
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles(theme => ({
  }));
class BiddingList extends React.Component{

    render(){
        return(
            <div>
                <Navigation></Navigation>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Item</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Decision</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Bidding></Bidding>
                    </TableBody>
                </Table>
            </div>
        );
    }
}
export default BiddingList;