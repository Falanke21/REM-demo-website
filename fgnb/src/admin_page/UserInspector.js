import React from "react";
import {
    Paper,
    Typography,
    IconButton,
    Input,
    FormControlLabel,
    Switch
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import SubmitIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(theme => ({
    info: {
        width: "35%",
        maxWidth: 500,
        margin: "auto",
        padding: 20
    }
}));

function UserInspector(props) {
    const classes = useStyles();
    const user = props.user;
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [blocked, setBlocked] = React.useState(false);
    const [editing, setEditing] = React.useState(false);

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
                            setUsername(props.user.username);
                            setPassword(props.user.password);
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
            <FormControlLabel
                control={
                    <Switch
                        checked={user.blocked}
                        onChange={event => {
                            setBlocked(!blocked);
                            user.blocked = !user.blocked;
                        }}
                        value="blocked"
                    />
                }
                label="Blocked"
                labelPlacement="start"
            />
        </Paper>
    );
}

export default UserInspector;
