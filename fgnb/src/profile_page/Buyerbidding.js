import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./Buyerbidding.css";
import { getState } from "statezero";

const getfetched =  [
    {
        "accepted": true,
        "time": "2019-12-02T00:20:16.256Z",
        "_id": "5de458d382068a09e4372e9b",
        "item": "5de42c0af3a86c38d81ffac8",
        "title": "iphone11",
        "buyer": "5de4269455c8f923101aefa0",
        "seller": "5de4269455c8f923101aefa0",
        "amount": 100,
        "__v": 0
    },
    {
        "accepted": null,
        "time": "2019-12-02T00:17:04.146Z",
        "_id": "5de458217eab5304d0e3ce95",
        "item": "5de42c0af3a86c38d81ffac8",
        "title": "textbook",
        "buyer": "5de4269455c8f923101aefa0",
        "seller": "5de4269455c8f923101aefa0",
        "amount": 40,
        "__v": 0
    }
]



function Givestatus(props) {
    //Hard code bidding information, add server call later
    if (props.status==true) {
        return (
            <div class="grid-item">
            accepted
            </div>);
    }
    if(props.status==null) {
        return (
            <div class="grid-item">
            Pending
            </div>);
    }
    else{
        return (
            <div class="grid-item">
            reject
            </div>);
    }
}
function GiveButton(props){
    if (props.status==true) {
        return (
            <div class="grid-item">
            <Link to={"./Contact/" + props.transactionId} style={{ textDecoration: 'none' }}>
            <button id="me-button" type="button" className="center-button"
		    >Contact Now!</button>
            </Link>
            </div>);
    }
    else {
        return (
            <div class="grid-item">
            <button disabled id="me-button" type="button" className="center-button"
		    >Contact Now!</button>
            </div>);
    };

}

// {
//     "accepted": null,
//     "time": "2019-12-02T00:17:04.146Z",
//     "_id": "5de458217eab5304d0e3ce95",
//     "item": "5de42c0af3a86c38d81ffac8",
//     "title": "textbook",
//     "buyer": "5de4269455c8f923101aefa0",
//     "seller": "5de4269455c8f923101aefa0",
//     "amount": 40,
//     "__v": 0
// }

class Buyerbidding extends React.Component {
    state = 
        {biddings:[{
            "accepted": true,
            "time": "2019-12-02T00:20:16.256Z",
            "_id": "5de458d382068a09e4372e9b",
            "item": "5de42c0af3a86c38d81ffac8",
            "title": "iphone11",
            "buyer": "5de4269455c8f923101aefa0",
            "seller": "5de4269455c8f923101aefa0",
            "amount": 100,
            "__v": 0}]}
    

    componentWillMount() {
        console.log(getState("currentUser"));
        const id = getState("currentUser");
        const url = `/api/bidding/buyer/${id}`;
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
                if (json.flag) {
                    console.log(json.biddings)
                    this.setState({
                        biddings: json.biddings
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
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
                    <div class="grid-item">Status</div>
                    <div class="grid-item">acceptNow</div>
                </div>
                <div>
                    {this.state.biddings.map(bid => (
                        <div class="grid-container">
                            <div class="grid-item"> {bid.item.title}</div>
                            <div class="grid-item"> {bid.amount}</div>
                            <div class="grid-item"> {bid.time.slice(0,10)}</div>
                            <Givestatus status={bid.accepted}></Givestatus>
                            <GiveButton status={bid.accepted} transactionId={bid.transaction} ></GiveButton>
                            {/* <div class="grid-item"> {bid.buyer}</div> */}
                            {/* <div class="grid-item"> {bid.accepted}</div> */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Buyerbidding;
