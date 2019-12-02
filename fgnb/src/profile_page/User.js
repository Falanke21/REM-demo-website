import React from "react";
import Navigation from "../navigation/Navigation";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "./User.css";
import { mainListItems, secondaryListItems } from "./ProfilelistItmes";
import FullWidthGrid from "./Profilebox";
import LineGridBox from "./ProfileWishListGrid";
import ItemGridForSale from "./MySalesItems";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import Avatar from "@material-ui/core/Avatar";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//     toolbar: {
//         paddingRight: 24 // keep right padding when drawer closed
//     },
//     toolbarIcon: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "flex-end",
//         padding: "0 8px",
//         ...theme.mixins.toolbar
//     },
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(["width", "margin"], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//         })
//     },
//     menuButton: {
//         marginRight: 36
//     },
//     menuButtonHidden: {
//         display: "none"
//     },
//     title: {
//         flexGrow: 1
//     },
//     drawerPaperClose: {
//         overflowX: "hidden",
//         transition: theme.transitions.create("width", {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up("sm")]: {
//             width: theme.spacing(9)
//         }
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         height: "100vh",
//         overflow: "auto"
//     },
//     paper: {
//         padding: theme.spacing(2),
//         display: "flex",
//         overflow: "auto",
//         flexDirection: "column"
//     },
//     fixedHeight: {
//         height: 240
//     },
//     ToolBarContainer: {
//         paddingTop: theme.spacing(4),
//         paddingBottom: theme.spacing(4),
//         paddingRight: theme.spacing(155),
//         display: "flex",
//         width: "40px"
//     },
//     bigAvatar: {
//         width: 250,
//         height: 250,
//         display: "flex",
//         position: "relative",
//         top: 40,
//         left: 1000,
//     },
//     bigGrid: {
//         width: 20,
//         height: 20,
//         top: 40,
//         left: 600,
//         display: "flex",
//         position: "absolute",
//         background: "pink"
//     }
// }));

// function UserPassWordBox() {

//     return (
//         <div className={classes.ToolBarContainer}>
//             <Divider />
//             <List>{mainListItems}</List>
//             <Divider />
//             {/* <ImageAvatars></ImageAvatars> test purposes */}
//             <FullWidthGrid> </FullWidthGrid>
//             <Grid container justify="center" alignItems="center">
//                 {/* <Avatar
//                     alt="IMAGE"
// 					src={require("./static/images/yaoshui.jpg")}
//                     className={classes.bigAvatar}
//                 /> */}
//             </Grid>
//         </div>
//     );
// }

// function UserSecondLayerBox() {
//     const classes = useStyles();
//     return (
//         <div className={classes.ToolBarContainer}>
//             <List>{secondaryListItems}</List>
//             <Grid container justify="center" alignItems="center">
//                 <LineGridBox></LineGridBox>
//                 <ItemGridForSale></ItemGridForSale>
//             </Grid>
//         </div>
//     );
// }

// const avatarletterstyle = makeStyles({
//     orangeAvatar: {
//         width: 200,
//         margin: 10,
//         color: "#fff",
//         backgroundColor: deepOrange[500],
//         position: "absolute",
//         top: '45%',
//         left: 150
//     },
//     purpleAvatar: {
//         width: 200,
//         margin: 10,
//         color: "#ggg",
//         backgroundColor: deepPurple[500],
//         position: "absolute",
//         top: '72%',
//         left: 150
//     }
// });

// function LetterAvatars() {
//     const classes = avatarletterstyle();
//     return (
//         <Grid container justify="center" alignItems="center">
//             <Avatar className={classes.orangeAvatar}>MyBidding</Avatar>
//         </Grid>
//     );
// }
// function LetterAvatarsMySales() {
//     const classes = avatarletterstyle();
//     return (
//         <Grid container justify="center" alignItems="center">
//             <Avatar className={classes.purpleAvatar}>MySells</Avatar>
//         </Grid>
//     );
// }
{/* <div class='tweetIconContainer'>
<span><img src="uoft.jpg" alt="uoft_pic" class="tweetIcon"></span>
</div> */}

function UserBox() {
    return (
        <div className="profile_box_container">
            <div className="profile_box">
                <div className="userIconContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4JAn8Ri7J-7gD3JqlRJt-YxfWqQCcXO_JE4AA_zrsgHKRUQA&s" alt="yaoshui_pic" className="userIcon"></img>
                    <div className="userNameContainer"> 
                        <div className="userBoxName"> Name</div>
                        <div className="userBoxEmail">Email</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DetailUserBox() {
    return (
        <div className="profile_detail_box_container">
            <div className="profile_detail_box">
            <div className="userDetailBoxName">Account Detail</div>
            <div className="userDetailInfoBox"> UserName</div>
            <div className="userDetailInfoBox"> Email</div>
            <div className="userDetailInfoBox"> PhoneNumber</div>
            <div className="userDetailButoomBox">
            <ButtonGroup
              variant="text"
              color="#3498db"
              size="large"
              aria-label="large contained secondary button group"
            >  
              <Link to="./additem" style={{ textDecoration: 'none' }}>
              <Button >     SELl    </Button>
              </Link>
              <Link to="./biddinglist" style={{ textDecoration: 'none' }}>
              <Button>Bidding to ME</Button>
              </Link>
              <Link to="./settings"  style={{ textDecoration: 'none' }}>
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

class User extends React.Component {
    render() {
        return (
            <div>
                <Navigation></Navigation>
                {/* <div style={{ height: "2em" }}>
                    <h1
                        style={{
                            color: "black",
                            float: "left",
                            position: "absolute",
                            left: "5%",
                            flex: "1",
                            margin: "0px",
                            fontSize: "80%"
                        }}
                    >
                        FGNB
                    </h1>
                </div> */}
                <div className = "Prfile_box_text">
                        User Profile
                </div>
                
                <UserBox>
                </UserBox>
                <DetailUserBox>
                </DetailUserBox>
                {/* <div>
                    <UserPassWordBox></UserPassWordBox>
                </div> */}
                {/* <div>
                    <UserPassWordBox></UserPassWordBox>
                </div>
                <div>
                    <LetterAvatars></LetterAvatars>
                </div>
                <UserSecondLayerBox></UserSecondLayerBox>
                <div>
                    <LetterAvatarsMySales></LetterAvatarsMySales>
                </div> */}
            </div>
        );
    }
}

export default User;
