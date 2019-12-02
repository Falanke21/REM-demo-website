import React from "react";
import { Grid } from "@material-ui/core";

import UserQueryForm from "./UserQueryForm";
import UserInspector from "./UserInspector";

class UserPanel extends React.Component {
    execQuery = () => {
        // currently search from state user list, to integrate with server call
        const res = this.state.userList.filter(u => {
            return u.username === this.state.username;
        });
        if (res.length === 0) {
            alert("User does not exist");
        } else {
            this.setState({
                currUser: res[0]
            });
        }
    };

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="flex-start"
            >
                <Grid item container>
                    <UserQueryForm />
                </Grid>
                <Grid item container>
                    <UserInspector />
                </Grid>
            </Grid>
        );
    }
}

export default UserPanel;
