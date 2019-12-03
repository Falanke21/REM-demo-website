import React from "react";

import { Link } from "react-router-dom";

import Navigation from "../navigation/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {updateSetting, updateSettingForm, getUserInfo} from "../utils/user";

export default function Settings() {
    const userInfo = getUserInfo();
    const userEmail = userInfo.email;
    // const [itemName, setItemName] = React.useState("");
    // const [itemDescription, setItemDescription] = React.useState("");
    // const [itemPrice, setItemPrice] = React.useState("");
    // const [itemLocation, setItemLocation] = React.useState("");

    // TODO add server call of user information
    // Hard code data here
    return (
        <div>
            <Navigation />
            <br />
            <Typography variant="h3" gutterBottom>
                Settings
            </Typography>
            <Container maxWidth="sm">
                <Container>
                    <TextField
                        multiline
                        margin="normal"
                        helperText="Username"
                        label="Name goes here"
                        type="text"
                        fullWidth
                        value="A person Here"
                    />
                </Container>

                <Container>
                    <TextField
                        multiline
                        margin="normal"
                        helperText="Email"
                        label="The email of this account"
                        type="text"
                        fullWidth
                        value={userEmail}
                    />
                </Container>

                <Container>
                    <TextField
                        margin="normal"
                        helperText="Password"
                        label="Change your password here"
                        type="password"
                        name="newPassword"
                        fullWidth
                        onChange={e => {
                            updateSettingForm(e.target);
                        }
                        }
                    />
                </Container>

                <Container>
                    <TextField
                        margin="normal"
                        helperText="Confirm Password"
                        label="Confirm your password"
                        type="password"
                        name="confirmPassword"
                        fullWidth
                        onChange={e => {
                            updateSettingForm(e.target);
                        }}
                    />
                </Container>

                <Container>
                    <TextField
                        margin="normal"
                        helperText="Change My Profile Picture"
                        type="file"
                        name="pic"
                        accept="image/*"
                    />
                </Container>
                <Container maxWidth="sm">
                    <br />
                    <Link to="/user">
                        <Button
                            size="large"
                            color="primary"
                            fullWidth
                            variant="contained"
                            onClick={updateSetting}
                        >
                            Update my information
                        </Button>
                    </Link>
                </Container>
            </Container>
        </div>
    );
}
