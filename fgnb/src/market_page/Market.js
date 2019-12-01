import React, { Component } from "react";

import Navigation from "../navigation/Navigation";

import ItemGrid from "./ItemGrid";
class Market extends Component {
    constructor(props) {
        super(props);
        this.props.history.push("/market");
    }
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
