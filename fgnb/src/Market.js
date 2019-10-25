import React, { Component } from "react";
import Container from "@material-ui/core/Container";

import Navigation from './Navigation';

import "./Market.css";
class Market extends Component {
  render() {
    return (
      <div>
        <Navigation />
          <span> Here is something for sale </span>
      </div>
    );
  }
}

export default Market;
