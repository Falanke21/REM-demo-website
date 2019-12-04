import React from "react";
import Navigation from "../navigation/Navigation";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "./User.css";
import { Link } from "react-router-dom";
import { getState } from "statezero";


function UserBox(getfetched) {
    {console.log(getfetched.getfetched)}
    return (
        <div className="profile_box_container">
            <div className="profile_box">
                <div className="userIconContainer">
                    <img src={getfetched.getfetched.profilePicture} className="userIcon"></img>
                    <div className="userNameContainer">
                        <div className="userBoxName"> Username:
                        <div className="userInput"> {getfetched.getfetched.username}
                        </div>
                        </div>
                        <div className="userBoxEmail">Email:
                        <div className="userInput"> {getfetched.getfetched.email}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DetailUserBox(getfetched) {
    {console.log(getfetched.getfetched)}
    return (
        <div className="profile_detail_box_container">
            <div className="profile_detail_box">
                <div className="userDetailBoxName">
                    Account Detail
            </div>
                <div className="userDetailInfoBox">
                    <div className="userDetailInfoBoxText">
                        UserName:
                    </div>
                    <div className="userDetailInfoBoxTextInput"> 
                    {getfetched.getfetched.username}
                    </div>
                </div>

                <div className="userDetailInfoBox">
                    <div className="userDetailInfoBoxText">
                        Email:
                    </div>
                    <div className="userDetailInfoBoxTextInput"> 
                    {getfetched.getfetched.email}
                    </div>
                </div>
                <div className="userDetailInfoBox">
                    <div className="userDetailInfoBoxText">
                        PhoneNumber:
                    </div>
                    <div className="userDetailInfoBoxTextInput"> 
                    {getfetched.getfetched.phone}
                    </div>
                </div>
                <div className="userDetailButoomBox">
                    <ButtonGroup
                        variant="text"
                        color="primary"
                        size="large"
                        aria-label="large contained secondary button group"
                    >
                        <Link to="./additem" style={{ textDecoration: 'none' }}>
                            <Button >     SELl    </Button>
                        </Link>
                        <Link to="./biddinglist" style={{ textDecoration: 'none' }}>
                            <Button>Bidding to ME</Button>
                        </Link>
                        <Link to="./buyerBidding" style={{ textDecoration: 'none' }}>
                            <Button herf="./settings">  My Bidding </Button>
                        </Link>
                        <Link to="./settings" style={{ textDecoration: 'none' }}>
                            <Button>   Setting   </Button>
                        </Link>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}
// const getfetched = {
//     "_id" : "5de48e5354c80a4a7689fffe",
//     "phone" : 123456789,
//     "profilePicture" : null,
//     "blacklisted" : true,
//     "sellings" : [],
//     "biddings" : [],
//     "username" : "chrisnew",
//     "email" : "chris@gmail.com",
//     "password" : "$2a$10$HjvKLTaI3c2H5cGZSBwkqOQA4VOObf5BU9f75WIXzJRqPEa3A2MGq",
//     "__v" : 0
// }

class User extends React.Component {
    state = {
        user: {phone: null, profilePicture: null, _id: null, username: null, email:null}
    };

    componentWillMount() {
        console.log(getState("currentUser"));
        const id = getState("currentUser");
        const url = `http://localhost:3001/api/user/info/${id}`;
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                return Promise.reject();
            }
        })
        .then(json => {
            console.log(json);
            if (json.flag && json.user) {
                this.setState({
                    user: json.user
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state.user);
        const getfetched = this.state.user
        return (
            <div>
                <Navigation></Navigation>
                <div className="Prfile_box_text">
                    User Profile
                </div>
                {console.log(getfetched)}
                <UserBox getfetched={getfetched}></UserBox>
                <DetailUserBox getfetched={getfetched}></DetailUserBox>
            </div>
        );
    }
}

export default User;
