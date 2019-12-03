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
    const [itemPicture, setItemPicture] = React.useState(undefined);

    const postItem = () => {
        const formData = new FormData();
        formData.append("title", itemName);
        formData.append("description", itemDescription);
        formData.append("price", itemPrice);
        formData.append("location", itemLocation);

        formData.append("uploadPicture", itemPicture);

        const request = new Request("http://localhost:3001/api/item", {
            method: "POST",
            headers: {
                // "Content-Type": "multipart/form-data",
                Accept: "application/json, text/plain, */*"
            },
            body: formData
        });

        fetch(request)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 400) {
                    return Promise.reject("Bad request");
                } else if (res.status === 404) {
                    return Promise.reject("User not found");
                } else {
                    return Promise.reject("Internal Server Error");
                }
            })
            .then(json => {
                console.log(json.error);
                alert("Item created!");
            })
            .catch(err => {
                alert(err);
            });
    };

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
                        onChange={e => {
                            setItemPicture(e.target.files[0]);
                        }}
                    />
                </Container>
                <Container maxWidth="sm">
                    <br />
                    <Link to="/market" style={{ textDecoration: "none" }}>
                        <Button
                            size="large"
                            color="primary"
                            fullWidth
                            variant="contained"
                            onClick={postItem}
                        >
                            Submit my item
                        </Button>
                    </Link>
                </Container>
            </Container>
        </div>
    );
}
