import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../login_page/Login";
import SignUp from "../signup_page/SignUp";
import "./Authview.css";

class Authview extends React.Component {
    render() {
        console.log("Authview rendered");
        return (
            <div className="Authview">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/signup" component={SignUp} />
                        <Route component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Authview;
