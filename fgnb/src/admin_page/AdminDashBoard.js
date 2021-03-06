import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Typography,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { logout } from "../utils/user";
import UserPanel from "./UserPanel";
import TransactionList from "./TransactionList";
import ItemList from "./ItemList";

class AdminDashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/admindash");
        this.state = {
            sideList: false,
            currPage: "Item"
        };
    }

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
                            {`Dashboard - ${this.state.currPage}`}
                        </Typography>
                        <Button
                            color="primary"
                            component={Link}
                            to="/"
                            onClick={logout}
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
                >
                    <div
                        style={{ width: 300 }}
                        onClick={this.toggleDrawer(false)}
                    >
                        <List>
                            {["User", "Transaction", "Item"].map(item => (
                                <ListItem
                                    button
                                    key={item}
                                    onClick={this.moveView(item)}
                                >
                                    <ListItemIcon>
                                        <MenuIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
                {this.state.currPage === "User" && <UserPanel />}
                {this.state.currPage === "Transaction" && <TransactionList />}
                {this.state.currPage === "Item" && <ItemList />}
            </div>
        );
    }
}

export default AdminDashBoard;
