import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Navigation.css";
import logo from '../asset/logo.png';
// const logo = require("./asset/logo.png");
class Navigation extends Component {
    render() {
        return (
            <div className="navigator">
                <img id="logo" src={logo} alt={"logo image"} />
                <ul>
                    <Link to={"/"}>
                        <li>
                            <Button
                                size="large"
                                variant="outlined"
                                color="primary"
                            >
                                Log out
                            </Button>
                        </li>
                    </Link>
                    <Link to={"/user"}>
                        <li>
                            <Button
                                size="large"
                                variant="outlined"
                                color="primary"
                            >
                                Profile
                            </Button>
                        </li>
                    </Link>
                    <Link to={"/market"}>
                        <li>
                            <Button
                                size="large"
                                variant="outlined"
                                color="primary"
                            >
                                Market
                            </Button>
                        </li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default Navigation;