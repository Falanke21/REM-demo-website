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

import Item from "./Item";
import StateReactComponent from "../component/StateReactComponent";
import { getAllItems } from "../utils/item";

const ContainedPaper = withStyles({
    root: {
        width: "90%",
        maxWidth: 1080,
        marginTop: 20,
        margin: "auto",
        padding: 20
    }
})(Paper);

class ItemList extends StateReactComponent {
    componentWillMount() {
        super.componentWillMount();
        getAllItems();
    }

    filterState({ adminItemList }) {
        return { itemList: adminItemList };
    }

    render() {
        const { itemList } = this.state;
        return (
            <div>
                <ContainedPaper>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Actions</TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Location</TableCell>
                                <TableCell align="left">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {itemList.map(item => {
                                return (
                                    <Item
                                        key={item._id}
                                        item={item}
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

export default ItemList;
