import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./BiddingList.css";

const getfetched =
{
    "flag": true,
    "biddings": [
        {
            "accepted": true,
            "time": "2019-12-02T00:17:04.146Z",
            "_id": "5de458217eab5304d0e3ce95",
            "title": "iphone11",
            "item": "5de42c0af3a86c38d81ffac8",
            "buyer": "5de4269455c8f923101aefa0",
            "seller": "5de4269455c8f923101aefa0",
            "amount": 40,
            "__v": 0
        },
        {
            "accepted": false,
            "time": "2019-12-01T00:17:04.146Z",
            "_id": "5de458217eab5304d0e3ce95",
            "title": "textbook",
            "item": "5de42c0af3a86c38d81ffac8",
            "buyer": "5de4269455c8f923101aefa0",
            "seller": "5de4269455c8f923101aefa0",
            "amount": 80,
            "__v": 0
        },
        {
            "accepted": null,
            "time": "2019-12-03T00:17:04.146Z",
            "_id": "5de458217eab5304d0e3ce95",
            "title": "computer",
            "item": "5de42c0af3a86c38d81ffac8",
            "buyer": "5de4269455c8f923101aefa0",
            "seller": "5de4269455c8f923101aefa0",
            "amount": 90,
            "__v": 0
        }

    ]
}

function AccepteNewBidding(){
    window.location.reload()
}

function DeclineNewBidding(){
    window.location.reload()
}

const getFetchedNoFalse = getfetched.biddings.filter((acc) => acc.accepted != false)
console.log(getFetchedNoFalse)
function GiveAccept(statusObj) {
    //Hard code bidding information, add server call later
    if (statusObj.accepted == true) {
        return (
            <Link to="./Contact" style={{ textDecoration: 'none' }}>
                <button id="me-button" type="button" className="center-button-Contact"
                >Contact Now!</button>
            </Link>
        )
    }
    else {
        return (
            // <Link to="./Contact" style={{ textDecoration: 'none' }}>
                <button id="me-button" type="button" onClick="AccepteNewBidding()" className="center-button-accept"
                >Accept!</button>
            ///* </Link> */
            )
    }
}

function GiveDecline(statusObj) {
    //Hard code bidding information, add server call later
    if (statusObj.accepted == true) {
        return (
            <Link to="./Contact" style={{ textDecoration: 'none' }}>
                <button disabled id="me-button-decline" type="button" className="center-button-decline"
                >Decline!</button>
            </Link>
        )
    }
    else {
        return (
            // <Link to="./Contact" style={{ textDecoration: 'none' }}>
                <button id="me-button-decline" type="button" onClick="DeclineNewBidding()" className="center-button-decline"
                >Decline!</button>
            // </Link>
        )
    }
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
                    <div class="grid-item">Decline</div>
                </div>
                <div>
                    {getFetchedNoFalse.map(bid => (
                        <div class="grid-container">
                            <div class="grid-item"> {bid.title}</div>
                            <div class="grid-item"> {bid.amount}</div>
                            <div class="grid-item"> {bid.time.slice(0, 10)}</div>
                            <div class="grid-item">
                                <GiveAccept accepted={bid.accepted}></GiveAccept>
                                {/* <Link to="./Contact" style={{ textDecoration: 'none' }}>
                                    <button id="me-button" type="button" className="center-button-accept"
                                    >Accept!</button>
                                </Link> */}
                            </div>
                            <div class="grid-item">
                            <GiveDecline accepted={bid.accepted}></GiveDecline>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default BiddingList;
