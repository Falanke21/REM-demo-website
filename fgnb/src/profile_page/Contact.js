import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Bidding from "./Bidding";
import "./Contact.css";
import Button from "@material-ui/core/Button";
import { getState } from "statezero";

//hard coded biddingId, need to be parsed everytime when we press the contact now 


function GetSellerPic(props){
    let sellerPic = props.sellerPic
    if(sellerPic == null){
        sellerPic = "https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg"
    }
    return(
        <img
            src={sellerPic}
            alt="yaoshui_pic"
            className="userIcon"
        ></img>)
}

function GetBuyerPic(props){
    let sellerPic = props.buyerPic
    if(sellerPic == null){
        sellerPic = "https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg"    }
    return(
        <img
            src={sellerPic}
            alt="yaoshui_pic"
            className="userIcon"
        ></img>)
}

function GetSellerPhone(props){
    let sellerPhone = props.sellerPhone
    if(sellerPhone == null){
        sellerPhone = "TBD"
    }
    return(
        sellerPhone)
}

function GetBuyerPhone(props){
    let buyerPhone = props.buyerPhone
    if(buyerPhone == null){
        buyerPhone = "TBD"
    }
    return(
        buyerPhone)
}

function UserBoxSeller(props) {
    console.log("In user seller box" + props);
    return (
        <div className="profile_box_container_Seller">
            <div className="profile_box">
                <div className="userIconContainer">
                    <GetSellerPic sellerPic={props.seller.img}></GetSellerPic>
                    <div className="userNameContainer">
                        <div className="userBoxName">
                            {" "}
                            Name:
                            <div className="userInput">
                                {" "}
                                {props.seller.username}
                            </div>
                        </div>

                        <div className="userBoxEmail">
                            Email:
                            <div className="userInput">
                                {" "}
                                {props.seller.email}
                            </div>
                        </div>

                        <div className="userBoxPhone">
                            PhoneNum:
                            <div className="userInput">
                                {" "}
                                <GetSellerPhone sellerPhone={props.seller.sellerPhone}></GetSellerPhone>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function UserBoxBuyer(props) {
    return (
        <div className="profile_box_container_Buyer">
            <div className="profile_box">
                <div className="userIconContainer">
                    <GetBuyerPic buyerPic={props.img} ></GetBuyerPic>
                    <div className="userNameContainer">
                        <div className="userBoxName">
                            {" "}
                            Name:
                            <div className="userInput">
                                {" "}
                                {props.buyer.username}
                            </div>
                        </div>

                        <div className="userBoxEmail">
                            Email:
                            <div className="userInput">
                                {" "}
                                {props.buyer.email}
                            </div>
                        </div>

                        <div className="userBoxPhone">
                            PhoneNum:
                            <div className="userInput">
                                {" "}
                                {props.phone}
                                <GetBuyerPhone buyerPhone={props.buyer.phone}></GetBuyerPhone>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: this.props.match.params.transactionId,
            transaction: {seller: {username:"",email:"", img:"",phone:""}, buyer: {username:"",email:"", img:"",phone:""},item:{img:""}},
        }
        this._getData();
    }


    _getData() {
        const id = this.props.match.params.transactionId
        console.log(id)
        const url = `http://localhost:3001/api/transaction/${id}`;
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
                    console.log("entered flag");
                    this.setState({
                        transaction: json.result
                    });

                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        console.log("In render: " + this.state.transaction);
        return (
            <div>
                <div>
                    <Navigation></Navigation>
                </div>

                <div className="Contact_box_text">
                    <div className="Contact_box_text_seller">Seller</div>
                    <div className="Contact_box_text_buyer">Buyer</div>
                </div>
                <UserBoxSeller seller={this.state.transaction.seller}></UserBoxSeller>
                <div className="Contact_congrads_box">
                    <div className="Contact_congrads_box_text">
                        congratulation!
                    </div>
                    <div className="Contact_congrads_box_pic">
                        <img src={this.state.transaction.item.img} className="bounding-box"></img>
                        <img
                            src="http://s.aigei.com/src/img/png/13/133d8084d3ba4d01922365fb631f415b.png?imageMogr2/auto-orient/thumbnail/!52x152r/gravity/Center/crop/52x152/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:bIfkc9DQrdr629xHIAFmGXWR5vs=
"
                            className="link-line-left"
                        ></img>
                        <img
                            src="http://s.aigei.com/src/img/png/b7/b7b4ea665f03450a8b9e13aae1a30204.png?imageMogr2/auto-orient/thumbnail/!52x152r/gravity/Center/crop/52x152/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:AQ1a5vILnO0e8nhfdAg5lHI7Qj4="
                            className="link-line-right"
                        ></img>
                    </div>
                </div>
                <UserBoxBuyer buyer={this.state.transaction.buyer}></UserBoxBuyer>
            </div>
        );
    }
}
export default Contact;
