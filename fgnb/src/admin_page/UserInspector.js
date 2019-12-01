import React from "react";
import {
    Paper,
    Typography,
    IconButton,
    Input,
    FormControlLabel,
    Switch
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import SubmitIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

import StateReactComponent from "../component/StateReactComponent";

class UserInspector extends StateReactComponent {
    render() {
        const { classes } = this.props;
        const user = this.props.user;
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
                                setUsername(this.props.user.username);
                                setPassword(this.props.user.password);
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
}

const styles = {
    info: {
        width: "35%",
        maxWidth: 500,
        margin: "auto",
        padding: 20
    }
}

export default withStyles(styles)(UserInspector);
