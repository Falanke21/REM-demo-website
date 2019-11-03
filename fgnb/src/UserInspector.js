import React from "react";
import {
    Paper,
    Typography,
    IconButton,
    Input,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import SubmitIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(theme => ({
    info: {
        width: "50%",
        maxWidth: 800,
        margin: "auto",
        padding: 20
    }
}));

function UserInspector(props) {
    const classes = useStyles();
    const user = props.user;
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [editing, setEditing] = React.useState(false);
    console.log(props.user);

    return (
        <Paper classes={{ root: classes.info }}>
            <Typography align="left" variant="h6">
                Username
            </Typography>
            {!editing ? (
                <Typography>{user.username}</Typography>
            ) : (
                <Input
                    name="username"
                    type="text"
                    value={username}
                    placeholder={user.username}
                    onChange={event => {
                        setUsername(event.target.value);
                    }}
                />
            )}
            <Typography align="left" variant="h6">
                Password
            </Typography>
            {!editing ? (
                <Typography>{user.password}</Typography>
            ) : (
                <Input
                    name="password"
                    type="text"
                    value={password}
                    placeholder={user.password}
                    onChange={event => {
                        setPassword(event.target.value);
                    }}
                />
            )}
            {!editing ? (
                <div>
                    <IconButton
                        onClick={() => {
                            setEditing(true);
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                </div>
            ) : (
                <div>
                    <IconButton
                        onClick={() => {
                            user.username = username;
                            user.password = password;
                            setEditing(false);
                        }}
                    >
                        <SubmitIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            setEditing(false);
                        }}
                    >
                        <CancelIcon />
                    </IconButton>
                </div>
            )}
            <Button variant="outlined">Block User</Button>
        </Paper>
    );
}

export default UserInspector;
