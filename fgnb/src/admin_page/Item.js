import React from "react";
import { TableRow, TableCell, IconButton, Input } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SubmitIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

import { updateItem, deleteItem } from "../utils/item";

class Item extends React.Component {
    state = {
        id: "",
        title: "",
        price: "",
        location: "",
        description: "",
        isEditing: false
    };

    toggleIsEditing = () => {
        const i = this.props.item;
        const cur = this.state.isEditing;
        this.setState({
            id: i._id,
            title: i.title,
            price: i.price,
            location: i.location,
            description: i.description,
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

    sumbitChange = () => {
        const { id, title, price, location, description } = this.state;
        const data = { title, price, location, description };
        this.toggleIsEditing();
        updateItem(id, data);
    };

    render() {
        const { item } = this.props;
        return this.state.isEditing ? (
            <TableRow key={item.id}>
                <TableCell align="center" style={{ width: "10%" }}>
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
                    style={{ width: "10%" }}
                >
                    {item._id}
                </TableCell>
                <TableCell align="right" style={{ width: "20%" }}>
                    <Input
                        name="name"
                        value={this.state.title}
                        onChange={this.handleChange}
                        type="text"
                    />
                </TableCell>
                <TableCell align="right" style={{ width: "10%" }}>
                    <Input
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        type="number"
                    />
                </TableCell>
                <TableCell align="right" style={{ width: "20%" }}>
                    <Input
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        type="text"
                    />
                </TableCell>
                <TableCell align="left" style={{ width: "40%" }}>
                    <Input
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        type="text"
                    />
                </TableCell>
            </TableRow>
        ) : (
            <TableRow key={item._id}>
                <TableCell align="center" style={{ width: "10%" }}>
                    <IconButton onClick={this.toggleIsEditing}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={e => deleteItem(this.props.item._id)}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
                <TableCell
                    component="th"
                    scope="row"
                    align="right"
                    style={{ width: "10%" }}
                >
                    {item._id}
                </TableCell>
                <TableCell align="right" style={{ width: "20%" }}>
                    {item.title}
                </TableCell>
                <TableCell align="right" style={{ width: "10%" }}>
                    {item.price}
                </TableCell>
                <TableCell align="right" style={{ width: "20%" }}>
                    {item.location}
                </TableCell>
                <TableCell align="left" style={{ width: "40%" }}>
                    {item.description}
                </TableCell>
            </TableRow>
        );
    }
}

export default Item;
