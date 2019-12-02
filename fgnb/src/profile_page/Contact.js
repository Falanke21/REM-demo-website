import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Bidding from "./Bidding";
import "./Contact.css";
import Button from '@material-ui/core/Button';

const getfetched = [{
    "_id" : "5de48e5354c80a4a7689fffe",
    "phone" : 123456789,
    "profilePicture" : null,
    "blacklisted" : true,
    "sellings" : [],
    "biddings" : [],
    "username" : "chrisnew",
    "email" : "chris@gmail.com",
    "password" : "$2a$10$HjvKLTaI3c2H5cGZSBwkqOQA4VOObf5BU9f75WIXzJRqPEa3A2MGq",
    "__v" : 0
},

/* 2 */
{
    "_id" : "5de4bf77796fa34dcf407564",
    "phone" : 987654321,
    "profilePicture" : null,
    "blacklisted" : false,
    "sellings" : [],
    "biddings" : [],
    "username" : "another",
    "email" : "another@gmail.com",
    "password" : "$2a$10$3kDNqPNH.N0q3onmdJXQC.r5aw0bsnccoxVX/d9K1vQX1nER98sWC",
    "__v" : 0
}]

function UserBoxSeller() {
    return (
        <div className="profile_box_container_Seller">
            <div className="profile_box">
                <div className="userIconContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4JAn8Ri7J-7gD3JqlRJt-YxfWqQCcXO_JE4AA_zrsgHKRUQA&s" alt="yaoshui_pic" className="userIcon"></img>
                    <div className="userNameContainer">
                        <div className="userBoxName"> Name:
                        <div className="userInput"> {getfetched[0].username}</div>
                    </div>
                        
                        <div className="userBoxEmail">Email:
                        <div className="userInput">  {getfetched[0].email}</div>
                        </div>
                 
                        <div className="userBoxPhone">PhoneNum:
                        <div className="userInput"> {getfetched[0].phone}</div>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4JAn8Ri7J-7gD3JqlRJt-YxfWqQCcXO_JE4AA_zrsgHKRUQA&s" alt="yaoshui_pic" className="userIcon"></img>
                    <div className="userNameContainer">
                        <div className="userBoxName"> Name:
                        <div className="userInput"> {getfetched[0].username}</div>
                        </div>
                        
                        <div className="userBoxEmail">Email:
                        <div className="userInput"> {getfetched[0].email}</div>
                        </div>
                       
                        <div className="userBoxPhone">PhoneNum:
                        <div className="userInput"> {getfetched[0].phone}</div>
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
                    <div className="Contact_box_text_seller">
                        Seller
                    </div>
                    <div className="Contact_box_text_buyer">
                        Buyer
                    </div>
                </div>
                <UserBoxSeller></UserBoxSeller>
                <div className="Contact_congrads_box">
                    <div className="Contact_congrads_box_text">
                    congratulation!
                    </div>
                </div>
                <UserBoxBuyer></UserBoxBuyer>
            </div>
        );
    }
}
export default Contact;
