import React from 'react';
import { Grid, Input, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class UserQueryForm extends React.Component {
    render() {
        return (
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid item xs={7}>
                    <Input
                        name="username"
                        value={this.props.username}
                        onChange={this.props.handleChange}
                        type="text"
                        placeholder="Username"
                    />
                </Grid>
                <Grid item xs={3}>
                    <IconButton onClick={this.props.execQuery}>
                        <SearchIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        );
    }
}

export default UserQueryForm;
