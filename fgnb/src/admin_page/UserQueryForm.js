import React from "react";
import { Grid, Input, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import StateReactComponent from "../component/StateReactComponent";
import { updateAdminUserQueryForm, queryUser } from "../utils/user";

class UserQueryForm extends StateReactComponent {
    filterState({ adminUserQueryForm }) {
        return { adminUserQueryForm };
    }

    render() {
        const { adminUserQueryForm } = this.state;
        const { email } = adminUserQueryForm;
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Input
                        name="email"
                        value={email}
                        onChange={e => updateAdminUserQueryForm(e.target)}
                        type="email"
                        placeholder="Email"
                    />
                </Grid>
                <Grid item>
                    <IconButton onClick={queryUser}>
                        <SearchIcon />
                    </IconButton>
                </Grid>
            </Grid>
        );
    }
}

export default UserQueryForm;
