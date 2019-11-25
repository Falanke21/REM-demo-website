import React, { Component } from "react";

import Navigation from "../Navigation";

import ItemGrid from "./ItemGrid";
class Market extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <br/>
                <br/>
                <ItemGrid />
            </div>
        );
    }
}

export default Market;
