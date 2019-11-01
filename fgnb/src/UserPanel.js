import React from 'react';
import { Grid } from '@material-ui/core';

import UserQueryForm from './UserQueryForm';
import User from './User';

class UserPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            currUser: null,
            userList: [
                {
                    username: "user1",
                    password: "user1"
                },
                {
                    username: "user2",
                    password: "user2"
                }
            ]
        };
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };

    execQuery = () => {
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
                    <UserQueryForm
                        username={this.state.username}
                        handleChange={this.handleChange}
                        execQuery={this.execQuery}
                    />
                </Grid>
                <Grid item>
                    <User
                        user={this.currUser}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default UserPanel;
