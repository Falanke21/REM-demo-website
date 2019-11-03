import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

function Biddings(prop) {
    // Hard code bidding information, add server call later
    const bidArray = [
        {
            bidderId: 1,
            username: "Yaoshui",
            profilePic: "./static/images/yaoshui.jpg",
            amount: 100
        },
        {
            bidderId: 2,
            username: "Falanke",
            profilePic: "./static/images/yaoshui.jpg",
            amount: 87
        },
        {
            bidderId: 3,
            username: "Why do I have the same photo as the other two",
            profilePic: "./static/images/yaoshui.jpg",
            amount: 85
        }
    ];

    return (
        <List>
            {bidArray.map(bid => (
                <Container>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={require(`${bid.profilePic}`)} />
                            {
                                // why react why
                            }
                        </ListItemAvatar>
                        <ListItemText
                            primary={bid.username}
                            secondary={`${bid.amount} dollars CAD`}
                        />
                    </ListItem>
                </Container>
            ))}
            {/*
            <Container>



                 <ListItem>
                    <ListItemAvatar>
                        <Avatar src={require("./static/images/yaoshui.jpg")} />
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
            </Container>
            <Container>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={require("./static/images/yaoshui.jpg")} />
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
            </Container>
            <Container>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={require("./static/images/yaoshui.jpg")} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Vacation"
                        secondary="July 20, 2014"
                    />
                </ListItem> 
			</Container>
			*/}
        </List>
    );
}

export default function CurrentBiddings(prop) {
    return (
        <div>
            <br />
            <Container maxWidth="sm">
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Current Biddings
                        </Typography>
                        <Biddings />
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
