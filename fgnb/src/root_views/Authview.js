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
                <Switch>
                    <Route
                        exact
                        path="/signup"
                        render={({ history }) => <SignUp history={history} />}
                    />
                    <Route component={Login} />
                </Switch>
            </div>
        );
    }
}

export default Authview;
