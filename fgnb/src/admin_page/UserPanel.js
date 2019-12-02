import React from "react";
import { Grid } from "@material-ui/core";

import UserQueryForm from "./UserQueryForm";
import UserInspector from "./UserInspector";

class UserPanel extends React.Component {
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
