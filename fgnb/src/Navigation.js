import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Navigation.css";

class Navigation extends Component {
    render() {
        return (
            <div>
                {" "}
                <div className="navigator">
                    <ul>
                        <Link to={"./user"}>
                            <li>
                                <Button variant="contained" color="primary">Profile</Button>
                            </li>
                        </Link>
                        <Link to={"./market"}>
                            <li>
                                <Button variant="contained" color="primary">Market</Button>
                            </li>
                        </Link>
                    </ul>
                </div>{" "}
            </div>
        );
    }
}

export default Navigation;
