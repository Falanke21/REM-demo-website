import React from "react";
import { Redirect, Link } from "react-router-dom";

import Navigation from "../navigation/Navigation";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function AddItem() {
    const [itemName, setItemName] = React.useState("");
    const [itemDescription, setItemDescription] = React.useState("");
    const [itemPrice, setItemPrice] = React.useState("");
    const [itemLocation, setItemLocation] = React.useState("");

    return (
        <div>
            <Navigation />
            <br />
            <Typography variant="h3" gutterBottom>
                Sell your items online
            </Typography>
            <Container maxWidth="sm">
                <Container>
                    <TextField
                        multiline
                        margin="normal"
                        helperText="Item Name"
                        label="Name goes here"
                        type="text"
                        fullWidth
                        value={itemName}
                        onChange={e => {
                            setItemName(e.target.value);
                        }}
                    />
                </Container>

                <Container>
                    <TextField
                        multiline
                        margin="normal"
                        helperText="Description"
                        label="Describe item's information, usage, condition etc."
                        type="text"
                        fullWidth
                        value={itemDescription}
                        onChange={e => {
                            setItemDescription(e.target.value);
                        }}
                    />
                </Container>

                <Container>
                    <TextField
                        margin="normal"
                        helperText="Preferred Price(CAD)"
                        label="How much are you looking forward to?"
                        type="number"
                        fullWidth
                        value={itemPrice}
                        onChange={e => {
                            setItemPrice(e.target.value);
                        }}
                    />
                </Container>

                <Container>
                    <TextField
                        margin="normal"
                        helperText="Location, example: Bay/College"
                        label="Give a rough location about your address!"
                        type="text"
                        fullWidth
                        value={itemLocation}
                        onChange={e => {
                            setItemLocation(e.target.value);
                        }}
                    />
                </Container>

                <Container>
                    <TextField
                        margin="normal"
                        helperText="Upload a picture of your item"
                        type="file"
                        name="pic"
                        accept="image/*"
                    />
                </Container>
                <Container maxWidth="sm">
                    <br />
                    <Link to="/market">
                        <Button
                            size="large"
                            color="primary"
                            fullWidth
                            variant="contained"
                            onClick={() =>
                                alert(
                                    `${itemName}, ${itemDescription}, ${itemPrice}, ${itemLocation}`
                                )
                            }
                        >
                            Submit my item
                        </Button>
                    </Link>
                </Container>
            </Container>
        </div>
    );
}
