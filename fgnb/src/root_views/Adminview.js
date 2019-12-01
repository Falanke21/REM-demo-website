import React from "react";
import { Switch, Route } from "react-router-dom";

import AdminDashBoard from "../admin_page/AdminDashBoard";

class Adminview extends React.Component {
    render() {
        console.log("Adminview rendered");
        return (
            <div>
                <Switch>
                    <Route
                        render={({ history }) => (
                            <AdminDashBoard history={history} />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default Adminview;
