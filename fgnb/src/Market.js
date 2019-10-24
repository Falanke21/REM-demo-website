import React, { Component } from 'react';

import './Market.css';
class Market extends Component {

	render(){
		return (<div className = "product-card"> 
					<h1> Here is something for sale </h1>
					<p> here is the description </p>
					<div className = "product-pic"></div>
					<div className = "product-info">
						<div className = "product-price"> $90</div>
						<button className = "buy-button" id = "buy-button"> Click To Buy </button>
					</div>

			</div>

			);
	}
}

export default Market;
