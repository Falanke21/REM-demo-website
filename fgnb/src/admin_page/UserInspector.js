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
import { updateAdminUserInspectForm, updateUser } from "../utils/user";

class UserInspector extends StateReactComponent {
    state = {
        editing: false
    };

    filterState({ adminUserInspectForm }) {
        return { adminUserInspectForm };
    }

    setEditing = editing => {
        updateAdminUserInspectForm({
            name: "editing",
            value: editing
        });
    };

    setBlocked = blocked => {
        updateAdminUserInspectForm({
            name: "blocked",
            value: blocked
        });
    };

    render() {
        const {
            user,
            username,
            editing,
            blocked
        } = this.state.adminUserInspectForm;
        const { classes } = this.props;

        return (
            user && (
                <Paper classes={{ root: classes.info }}>
                    <Typography align="left" variant="h6">
                        Username
                    </Typography>
                    <div align="center">
                        {!editing ? (
                            <Typography>{user.username}</Typography>
                        ) : (
                            <Input
                                name="username"
                                type="text"
                                value={username}
                                placeholder={user.username}
                                onChange={e => updateAdminUserInspectForm(e.target)}
                            />
                        )}
                    </div>
                    {editing && (
                        <div align="center">
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={blocked}
                                        onChange={e => {
                                            this.setBlocked(!blocked);
                                        }}
                                        value="blocked"
                                    />
                                }
                                label="Blocked"
                                labelPlacement="start"
                            />
                        </div>
                    )}
                    <div align="center">
                        {!editing ? (
                            <div>
                                <IconButton
                                    onClick={() => {
                                        this.setEditing(true);
                                        updateAdminUserInspectForm({
                                            name: "username",
                                            value: user.username
                                        });
                                        updateAdminUserInspectForm({
                                            name: "password",
                                            value: user.password
                                        });
                                    }}
                                >
                                    <EditIcon />
                                </IconButton>
                            </div>
                        ) : (
                            <div>
                                <IconButton
                                    onClick={() => {
                                        updateUser();
                                        this.setEditing(false);
                                    }}
                                >
                                    <SubmitIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => {
                                        this.setEditing(false);
                                    }}
                                >
                                    <CancelIcon />
                                </IconButton>
                            </div>
                        )}
                    </div>
                </Paper>
            )
        );
    }
}

const styles = {
    info: {
        width: "20%",
        maxWidth: 500,
        margin: "auto",
        padding: 20
    }
};

export default withStyles(styles)(UserInspector);
