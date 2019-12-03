import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { logout } from "../utils/user";
import logo from "../asset/logo.png";
import "./Navigation.css";

class Navigation extends Component {
    render() {
        return (
            <div className="navigator">
                <Link to="./market" style={{ textDecoration: 'none' }}>
                <img id="logo" src={logo} alt={"logo image"} />
                </Link>
                <ul>
                    <Link to={"/login"}>
                        <li>
                            <Button
                                size="large"
                                variant="outlined"
                                color="primary"
                                onClick={logout}
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
