import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Market from "../market_page/Market";
import AdminDashBoard from "../admin_page/AdminDashBoard";
import User from "../profile_page/User";
import ItemDetail from "../market_page/ItemDetail";
import AddItem from "../profile_page/AddItem";
import BiddingList from "../profile_page/BiddingList";
import Settings from "../profile_page/Settings";
import "./Mainview.css";

class Mainview extends React.Component {
    render() {
        console.log("Mainview rendered");
        return (
            <div className="Mainview">
                <Switch>
                    <Route exact path={["/", "/market"]} component={Market} />
                    <Route exact path="/admindash" component={AdminDashBoard} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/item/:itemId" component={ItemDetail} />
                    <Route exact path="/additem" component={AddItem} />
                    <Route exact path="/biddinglist" component={BiddingList} />
                    <Route exact path="/settings" component={Settings} />
                </Switch>
            </div>
        );
    }
}

export default Mainview;
