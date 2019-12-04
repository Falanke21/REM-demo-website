import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./BiddingList.css";
import { getState } from "statezero";


function AccepteNewBidding(BiddingObj) {
    const Bidding_id = BiddingObj.bidjason._id
    console.log(Bidding_id)
    const request = new Request("http://localhost:3001/api/bidding/accept", {   
        method: "PATCH",
        body: JSON.stringify({ biddingId: Bidding_id }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
    .then(res => {
        if (res.status === 200) {
            console.log("Success");
        } else {
            return Promise.reject();
        }
    })
    .catch(error => {
        console.log(error);
    })
    window.location.reload()
    }

function DeclineNewBidding(BiddingObj) {
    window.location.reload()
    console.log(BiddingObj)
    const Bidding_id = BiddingObj.bidjason._id
    console.log(Bidding_id)
    const request = new Request("http://localhost:3001/api/bidding/decline", {
        method: "PATCH",
        body: JSON.stringify({ biddingId: Bidding_id }),
        headers: {
            delete: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
    .then(res => {
        if (res.status === 200) {
            console.log("Success Deleted");
        } else {
            return Promise.reject();
        }
    })
    .catch(error => {
        console.log(error);
    })
}


function GiveAccept(props) {
    console.log(props)
    if (props.bidjason.accepted == true) {
        return (
            <Link to={"./Contact/" + props.transactionId} style={{ textDecoration: 'none' }}>
                <button id="me-button" type="button" className="center-button-Contact"
                >Contact Now!</button>
            </Link>
        )
    }
    else {
        return (
            <button id="me-button" type="button" onClick={e => AccepteNewBidding(props)} className="center-button-accept"
            >Accept!</button>
        )
    }
}

function GiveDecline(statusObj) {
    //Hard code bidding information, add server call later
    if (statusObj.bidjason.accepted == true) {
        return (
                <button disabled id="me-button-decline" type="button" className="center-button-decline"
                >Decline!</button>
        )
    }
    else {
        return (
            // <Link to="./Contact" style={{ textDecoration: 'none' }}>
            <button id="me-button-decline" type="button" onClick={e => DeclineNewBidding(statusObj) } className="center-button-decline"
            >Decline!</button>
            // </Link>
        )
    }
}



class BiddingList extends React.Component {
    state = {
        biddings: []
    };
    componentWillMount() {
        console.log(getState("currentUser"));
        const id = getState("currentUser");
        const url = `http://localhost:3001/api/bidding/seller/${id}`;
        fetch(url)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject();
                }
            })
            .then(json => {
                console.log(json)
                console.log(json.flag && json.biddings)

                if (json.flag) {
                    const temp = json.biddings.filter((acc) => acc.accepted != false)
                    console.log(temp)
                    console.log(json.biddings.filter((acc) => acc.accepted != false))
                    this.setState({
                        biddings: temp
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const getetched = this.state.biddings
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
                    {getetched.map(bid => (
                        <div class="grid-container">
                            <div class="grid-item"> {bid.title}</div>
                            <div class="grid-item"> {bid.amount}</div>
                            <div class="grid-item"> {bid.time.slice(0, 10)}</div>
                            <div class="grid-item">
                                <GiveAccept bidjason={bid} transactionId={bid.transaction}></GiveAccept>
                            </div>
                            <div class="grid-item">
                                <GiveDecline bidjason={bid}></GiveDecline>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default BiddingList;
