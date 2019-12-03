import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./Buyerbidding.css";

const getfetched = [
    {
        "accepted": true,
        "time": "2019-",
        "_id": "5de4",
        "item": "5de42",
        "buyer": "5de4a0",
        "seller": "5dea0",
        "amount": 100,
        "__v": 0
    },
    {
        "accepted": null,
        "time": "2019-12",
        "_id": "5de4582",
        "item": "5de42",
        "buyer": "5de4269",
        "seller": "5de42",
        "amount": 40,
        "__v": 0
    }
]
function Givestatus(statusObj) {
    //Hard code bidding information, add server call later
    if (statusObj.status == true) {
        return (
            <div class="grid-item">
                {/* <Link to="./Contact" style={{ textDecoration: 'none' }}>
            <button id="me-button" type="button" className="center-button"
		    >Contact Now!</button>
            </Link> */}
                accepted
            </div>);
    }
    else {
        return (
            <div class="grid-item">
                rejected
            </div>)
    };
}
function GiveButton(statusObj) {
    if (statusObj.status == true) {
        return (
            <div class="grid-item">
                <Link to="./Contact" style={{ textDecoration: 'none' }}>
                    <button id="me-button" type="button" className="center-button"
                    >Contact Now!</button>
                </Link>
            </div>);
    }
    else {
        return (
            <div class="grid-item">
                <Link to="./Contact" style={{ textDecoration: 'none' }}>
                    <button disabled id="me-button" type="button" className="center-button"
                    >Contact Now!</button>
                </Link>
            </div>);
    };

}



class BiddingList extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navigation></Navigation>
                </div>
                <div class="grid-container">
                    <div class="grid-item">Item</div>
                    <div class="grid-item">Price</div>
                    <div class="grid-item">Time</div>
                    <div class="grid-item">Accept</div>
                </div>
                <div>
                    {getfetched.map(bid => (
                        <div class="grid-container">
                            <div class="grid-item"> {bid.item}</div>
                            <div class="grid-item"> {bid.amount}</div>
                            <div class="grid-item"> {bid.time}</div>
                            <div class="grid-item">
                            <Link to="./Contact" style={{ textDecoration: 'none' }}>
                                    <button id="me-button" type="button" className="center-button"
                                    >Accept!</button>
                            </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default BiddingList;
