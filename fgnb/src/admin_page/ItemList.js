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

import ItemAddForm from "./ItemAddForm";
import Item from "./Item";

const ContainedPaper = withStyles({
    root: {
        width: "90%",
        maxWidth: 1080,
        marginTop: 20,
        margin: "auto",
        padding: 20
    }
})(Paper);

function createItem(id, name, price, location, description) {
    return { id, name, price, location, description };
}

class ItemList extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            price: "",
            location: "",
            description: "",
            data: [
                createItem(0, "Tasty burger", 15, "SS", "It is tasty."),
                createItem(
                    1,
                    "Breakfast",
                    20,
                    "Cora",
                    "Decent breakfast in town."
                )
            ]
        };
    }

    addItem = prop => {
        let items = this.state.data;
        items.push({ ...prop, id: items[items.length - 1].id + 1 });
        this.setState({
            data: items
        });
    };

    updateItem = (item, newItem) => {
        const newList = this.state.data.map(i => {
            if (i.id === item.id) {
                return newItem;
            } else {
                return i;
            }
        });
        this.setState({
            data: newList
        });
    };

    removeItem = item => {
        const toKeep = this.state.data.filter(i => {
            return i.id !== item.id;
        });
        this.setState({
            data: toKeep
        });
    };

    render() {
        const itemList = this.state.data;
        return (
            <div>
                <ItemAddForm addItem={this.addItem} />
                <ContainedPaper>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Actions</TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Location</TableCell>
                                <TableCell align="left">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {itemList.map(item => {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        updateItem={this.updateItem}
                                        removeItem={this.removeItem}
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
