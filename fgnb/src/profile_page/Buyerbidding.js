import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Bidding from "./Bidding";
import "./Buyerbidding.css";
import Button from '@material-ui/core/Button';

const getfetched = [
    {
        "accepted": true,
        "time": "2019-",
        "_id": "5de4",
        "item": "5de428",
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

    // {
    //     "accepted": true,
    //     "time": "2019-12-02T00:20:16.256Z",
    //     "_id": "5de458d382068a09e4372e9b",
    //     "item": "5de42c0af3a86c38d81ffac8",
    //     "buyer": "5de4269455c8f923101aefa0",
    //     "seller": "5de4269455c8f923101aefa0",
    //     "amount": 100,
    //     "__v": 0
    // },
    // {
    //     "accepted": null,
    //     "time": "2019-12-02T00:17:04.146Z",
    //     "_id": "5de458217eab5304d0e3ce95",
    //     "item": "5de42c0af3a86c38d81ffac8",
    //     "buyer": "5de4269455c8f923101aefa0",
    //     "seller": "5de4269455c8f923101aefa0",
    //     "amount": 40,
    //     "__v": 0
    // }
]
function Givestatus(stautsObj) {
    //Hard code bidding information, add server call later
    console.log(stautsObj)
    if (stautsObj.stauts==true) {
        return (
            <div class="grid-item">
            <Link to="./Contact" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">     Contact Now!    </Button>
            </Link>
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



class Buyerbidding extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navigation></Navigation>
                </div>
                <div class="grid-container">
                    <div class="grid-item">Item</div>
                    <div class="grid-item">Price</div>
                    <div class="grid-item">Buyer</div>
                    <div class="grid-item">Status</div>
                </div>
                <div>
                    {getfetched.map(bid => (
                        <div class="grid-container">
                            <div class="grid-item"> {bid.item}</div>
                            <div class="grid-item"> {bid.amount}</div>
                            <div class="grid-item"> {bid.buyer}</div>
                            <Givestatus stauts={bid.accepted}></Givestatus>
                            {/* <div class="grid-item"> {bid.accepted}</div> */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Buyerbidding;
