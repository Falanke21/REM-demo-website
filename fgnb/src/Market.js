import React, { Component } from "react";

import Navigation from "./Navigation";

import "./Market.css";
import ItemGrid from "./ItemGrid";
class Market extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <ItemGrid />
            </div>
        );
    }
}

export default Market;
