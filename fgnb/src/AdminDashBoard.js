import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Paper,
    Typography,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import UserPanel from "./UserPanel.js";
import TransactionList from "./TransactionList";

class AdminDashBoard extends React.Component {
    state = {
        sideList: false,
        currPage: "User"
    };

    toggleDrawer = open => event => {
        this.setState({
            sideList: open
        });
    };

    moveView = newView => event => {
        this.setState({
            currPage: newView
        });
    };

    render() {
        return (
            <div>
                <AppBar style={{ flexGrow: 1, background: "lightcyan" }}>
                    <Toolbar>
                        <IconButton
                            style={{ marginRight: 10 }}
                            edge="start"
                            color="primary"
                            onClick={this.toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            style={{ flexGrow: 1 }}
                            color="primary"
                            align="left"
                        >
                            Dashboard
                        </Typography>
                        <Button
                            color="primary"
                            component={Link}
                            to="/"
                            variant="outlined"
                        >
                            Log out
                        </Button>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Drawer
                    open={this.state.sideList}
                    onClose={this.toggleDrawer(false)}
                    moveView={this.moveView}
                >
                    <div
                        style={{ width: 300 }}
                        onClick={this.toggleDrawer(false)}
                    >
                        <List>
                            {["User", "Transaction"].map(item => (
                                <ListItem button onClick={this.moveView(item)}>
                                    <ListItemIcon>
                                        <MenuIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
                {this.state.currPage === "User" && (
                    <Paper>
                        <UserPanel />
                    </Paper>
                )}
                {this.state.currPage === "Transaction" && (
                    <Paper>
                        <TransactionList />
                    </Paper>
                )}
            </div>
        );
    }
}

export default AdminDashBoard;
