import React from "react";
import { Switch, Route } from "react-router-dom";

import Market from "../market_page/Market";
import User from "../profile_page/User";
import ItemDetail from "../market_page/ItemDetail";
import AddItem from "../profile_page/AddItem";
import BiddingList from "../profile_page/BiddingList";
import Settings from "../profile_page/Settings";
import PageNotFound from "../component/NotFoundPage";
import BuyerBidding from "../profile_page/Buyerbidding";
import Contact from "../profile_page/Contact";
import "./Mainview.css";

class Mainview extends React.Component {
    render() {
        console.log("Mainview rendered");
        return (
            <div className="Mainview">
                <Switch>
                    <Route exact path="/user" component={User} />
                    <Route exact path="/item/:itemId" component={ItemDetail} />
                    <Route exact path="/additem" component={AddItem} />
                    <Route exact path="/biddinglist" component={BiddingList} />
                    <Route
                        exact
                        path="/buyerBidding"
                        component={BuyerBidding}
                    />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/contact/:transactionId" component={Contact} />
                    <Route
                        exact
                        path={["/", "/market"]}
                        render={({ history }) => <Market history={history} />}
                    />
                    <Route
                        render={({ history }) => (
                            <PageNotFound history={history} />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default Mainview;
