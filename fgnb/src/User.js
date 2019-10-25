import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import "./User.css"

class User extends React.Component{
	render(){
		return(
			<div>
				<div className = "market">
					<Link to={"./Market"}>
						<button className="market_button"> Market</button>
					</Link>
				</div>
				<div className="profiles">
					<Avatar className="avatar" size="400"> AL</Avatar>
					<div className="sales">
						<button className="btn profile_button">Sales</button>
					</div>
					<div className="orders">
						<button className="btn profile_button">orders</button>
					</div>
					<div className="wishlist">
						<button className="btn profile_button">WishList</button>
					</div>
				</div>
			</div>
			);
	}
}


export default User;
