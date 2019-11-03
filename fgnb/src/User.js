import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Navigation from "./Navigation";
import Drawer from "@material-ui/core/Drawer";
import { positions, style } from "@material-ui/system";
import "./User.css";
import { makeStyles } from "@material-ui/core/styles";
import { mainListItems, secondaryListItems } from "./ProfilelistItmes";
import { pink } from "@material-ui/core/colors";
import FullWidthGrid from "./Profilebox";
import LineGridBox from "./ProfileWishListGrid";
import ItemGridForSale from "./MySalesItems";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: "none"
    },
    title: {
        flexGrow: 1
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    fixedHeight: {
        height: 240
    },
    ToolBarContainer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(155),
        display: "flex",
        width: "40px"
    },
    bigAvatar: {
        width: 250,
        height: 250,
        display: "flex",
        position: "relative",
        top: 40,
        left: 1000,
    },
    bigGrid: {
        width: 20,
        height: 20,
        top: 40,
        left: 600,
        display: "flex",
        position: "absolute",
        background: "pink"
    }
}));

//this code is for the test purposes

//   const AvatarTestuseStyles = makeStyles({
// 	avatar: {
// 	  margin: 10,
// 	},
// 	bigAvatar: {
// 	  margin: 10,
// 	  width: 60,
// 	  height: 60,
// 	},
//   });

// 	function ImageAvatars() {
// 	const avatarwtf = AvatarTestuseStyles();
// 	return (
// 	  <Grid container justify="center" alignItems="center">
// 		<Avatar alt="Remy Sharp" image="./asset/bike.jpg" className={avatarwtf.avatar} />
// 		<Avatar alt="Remy Sharp" image="./asset/bike.jpg" className={avatarwtf.bigAvatar} />
// 	  </Grid>
// 	);
//   }

function UserPassWordBox() {
    const classes = useStyles();
    return (
        <div className={classes.ToolBarContainer}>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            {/* <ImageAvatars></ImageAvatars> test purposes */}
            <FullWidthGrid> </FullWidthGrid>
            <Grid container justify="center" alignItems="center">
                {/* <Avatar
                    alt="IMAGE"
					src={require("./static/images/yaoshui.jpg")}
                    className={classes.bigAvatar}
                /> */}
            </Grid>
        </div>
    );
}

function UserSecondLayerBox() {
    const classes = useStyles();
    return (
        <div className={classes.ToolBarContainer}>
            <List>{secondaryListItems}</List>
            <Grid container justify="center" alignItems="center">
                <LineGridBox></LineGridBox>
                <ItemGridForSale></ItemGridForSale>
            </Grid>
        </div>
    );
}

const avatarletterstyle = makeStyles({
    orangeAvatar: {
        width: 200,
        margin: 10,
        color: "#fff",
        backgroundColor: deepOrange[500],
        position: "absolute",
        top: '45%',
        left: 150
    },
    purpleAvatar: {
        width: 200,
        margin: 10,
        color: "#ggg",
        backgroundColor: deepPurple[500],
        position: "absolute",
        top: '72%',
        left: 150
    }
});

function LetterAvatars() {
    const classes = avatarletterstyle();
    return (
        <Grid container justify="center" alignItems="center">
            <Avatar className={classes.orangeAvatar}>MyBidding</Avatar>
        </Grid>
    );
}
function LetterAvatarsMySales() {
    const classes = avatarletterstyle();
    return (
        <Grid container justify="center" alignItems="center">
            <Avatar className={classes.purpleAvatar}>MySells</Avatar>
        </Grid>
    );
}

class User extends React.Component {
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <div>
                    <UserPassWordBox></UserPassWordBox>
                </div>
                <div>
                    <LetterAvatars></LetterAvatars>
                </div>
                <UserSecondLayerBox></UserSecondLayerBox>
                <div>
                    <LetterAvatarsMySales></LetterAvatarsMySales>
                </div>
            </div>
        );
    }
}

export default User;
