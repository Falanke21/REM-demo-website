import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Bidding from "./Bidding";
import "./Contact.css";
import Button from "@material-ui/core/Button";

const getfetched = {
    flag: true,
    result: {
        transaction: {
            time: "2019-12-03T05:58:30.800Z",
            _id: "5de5f98680cd8d3228eef214",
            bidding: "5de5f0c18c9aee1ac8e12e6f",
            finalPrice: 80,
            __v: 0
        },
        bidding: {
            accepted: true,
            time: "2019-12-03T05:20:58.459Z",
            _id: "5de5f0c18c9aee1ac8e12e6f",
            item: "5de5f03cdf2fbf255cea6ef2",
            buyer: "5de5f014df2fbf255cea6ef0",
            seller: "5de5f014df2fbf255cea6ef0",
            amount: 80,
            __v: 0
        },
        item: {
            inMarket: false,
            submittedWhen: "2019-12-03T05:17:22.670Z",
            biddings: ["5de5f089df2fbf255cea6ef3", "5de5f0c18c9aee1ac8e12e6f"],
            _id: "5de5f03cdf2fbf255cea6ef2",
            img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
            title: "Iphone11",
            seller: "5de5f014df2fbf255cea6ef0",
            price: 2000,
            description: "wat",
            location: "bay/college",
            __v: 2
        },
        seller: {
            phone: 1234459888,
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4JAn8Ri7J-7gD3JqlRJt-YxfWqQCcXO_JE4AA_zrsgHKRUQA&s",
            blacklisted: false,
            sellings: ["5de5f030df2fbf255cea6ef1", "5de5f03cdf2fbf255cea6ef2"],
            biddings: ["5de5f0c18c9aee1ac8e12e6f"],
            _id: "5de5f014df2fbf255cea6ef0",
            username: "Yaoshui21",
            email: "chrissuper@gmail.com",
            __v: 3
        },
        buyer: {
            phone: null,
            profilePicture: null,
            blacklisted: false,
            sellings: ["5de5f030df2fbf255cea6ef1", "5de5f03cdf2fbf255cea6ef2"],
            biddings: ["5de5f0c18c9aee1ac8e12e6f"],
            _id: "5de5f014df2fbf255cea6ef0",
            username: "Falanke21",
            email: "frankhua21@gmail.com",
            __v: 3
        }
    }
};

function GetSellerPic(){
    let sellerPic = getfetched.result.seller.profilePicture
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

function GetBuyerPic(){
    let sellerPic = getfetched.result.buyer.profilePicture
    if(sellerPic == null){
        sellerPic = "https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg"    }
    return(
        <img
            src={sellerPic}
            alt="yaoshui_pic"
            className="userIcon"
        ></img>)
}

function GetSellerPhone(){
    let sellerPhone = getfetched.result.seller.phone
    if(sellerPhone == null){
        sellerPhone = "TBD"
    }
    return(
        sellerPhone)
}

function GetBuyerPhone(){
    let buyerPhone = getfetched.result.buyer.phone
    if(buyerPhone == null){
        buyerPhone = "TBD"
    }
    return(
        buyerPhone)
}

const getfetchedPic = getfetched.result.item.img
    // "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418";

function UserBoxSeller() {
    return (
        <div className="profile_box_container_Seller">
            <div className="profile_box">
                <div className="userIconContainer">
                    <GetSellerPic></GetSellerPic>
                    <div className="userNameContainer">
                        <div className="userBoxName">
                            {" "}
                            Name:
                            <div className="userInput">
                                {" "}
                                {getfetched.result.seller.username}
                            </div>
                        </div>

                        <div className="userBoxEmail">
                            Email:
                            <div className="userInput">
                                {" "}
                                {getfetched.result.seller.email}
                            </div>
                        </div>

                        <div className="userBoxPhone">
                            PhoneNum:
                            <div className="userInput">
                                {" "}
                                {/* {getfetched.result.seller.phone} */}
                                <GetSellerPhone></GetSellerPhone>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function UserBoxBuyer() {
    return (
        <div className="profile_box_container_Buyer">
            <div className="profile_box">
                <div className="userIconContainer">
                    <GetBuyerPic></GetBuyerPic>
                    <div className="userNameContainer">
                        <div className="userBoxName">
                            {" "}
                            Name:
                            <div className="userInput">
                                {" "}
                                {getfetched.result.buyer.username}
                            </div>
                        </div>

                        <div className="userBoxEmail">
                            Email:
                            <div className="userInput">
                                {" "}
                                {getfetched.result.buyer.email}
                            </div>
                        </div>

                        <div className="userBoxPhone">
                            PhoneNum:
                            <div className="userInput">
                                {" "}
                                {/* {getfetched.result.buyer.phone} */}
                                <GetBuyerPhone></GetBuyerPhone>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navigation></Navigation>
                </div>

                <div className="Contact_box_text">
                    <div className="Contact_box_text_seller">Seller</div>
                    <div className="Contact_box_text_buyer">Buyer</div>
                </div>
                <UserBoxSeller></UserBoxSeller>
                <div className="Contact_congrads_box">
                    <div className="Contact_congrads_box_text">
                        congratulation!
                    </div>
                    <div className="Contact_congrads_box_pic">
                        <img src={getfetchedPic} className="bounding-box"></img>
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
                <UserBoxBuyer></UserBoxBuyer>
            </div>
        );
    }
}
export default Contact;
