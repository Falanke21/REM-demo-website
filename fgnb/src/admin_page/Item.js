import React from "react";
import { TableRow, TableCell, IconButton, Input } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SubmitIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

function createItem(id, name, price, location, description) {
    return { id, name, price, location, description };
}

class Item extends React.Component {
    state = {
        id: "",
        name: "",
        price: "",
        location: "",
        description: "",
        isEditing: false
    };

    toggleIsEditing = () => {
        const i = this.props.item;
        const cur = this.state.isEditing;
        this.setState({
            id: i.id,
            name: i.name,
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

    render() {
        const { item, updateItem, removeItem } = this.props;
        const sumbitChange = () => {
            this.toggleIsEditing();
            updateItem.bind(this, item)(
                createItem(
                    this.state.id,
                    this.state.name,
                    this.state.price,
                    this.state.location,
                    this.state.description
                )
            );
        };

        return this.state.isEditing ? (
            <TableRow key={item.id}>
                <TableCell align="center" style={{ width: "10%" }}>
                    <IconButton onClick={sumbitChange}>
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
                    style={{ width: "18%" }}
                >
                    {item.id.toString()}
                </TableCell>
                <TableCell align="right" style={{ width: "18%" }}>
                    <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="text"
                    />
                </TableCell>
                <TableCell align="right" style={{ width: "18%" }}>
                    <Input
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        type="number"
                    />
                </TableCell>
                <TableCell align="right" style={{ width: "18%" }}>
                    <Input
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        type="text"
                    />
                </TableCell>
                <TableCell align="right" style={{ width: "18%" }}>
                    <Input
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        type="text"
                    />
                </TableCell>
            </TableRow>
        ) : (
            <TableRow key={item.id}>
                <TableCell align="center" style={{ width: "10%" }}>
                    <IconButton onClick={this.toggleIsEditing}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={removeItem.bind(this, item)}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
                <TableCell
                    component="th"
                    scope="row"
                    align="right"
                    style={{ width: "18%" }}
                >
                    {item.id.toString()}
                </TableCell>
                <TableCell align="right" style={{ width: "18%" }}>
                    {item.name}
                </TableCell>
                <TableCell align="right" style={{ width: "18%" }}>
                    {item.price}
                </TableCell>
                <TableCell align="right" style={{ width: "18%" }}>
                    {item.location}
                </TableCell>
                <TableCell align="left" style={{ width: "18%" }}>
                    {item.description}
                </TableCell>
            </TableRow>
        );
    }
}

export default Item;
